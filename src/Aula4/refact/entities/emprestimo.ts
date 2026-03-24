import { StatusEmprestimo } from "../enums/statusEmprestimo";
import { Livro } from "./livro";
import { Usuario } from "./usuario";

export class Emprestimo {
  private readonly dataEmprestimo: Date;
  private readonly dataDevolucaoPrevista: Date;
  private status: StatusEmprestimo = StatusEmprestimo.ATIVO;
  private static readonly DIAS_EMPRESTIMO = 14;
  private static readonly VALOR_MULTA_DIA = 2.5;

  constructor(
    private readonly livro: Livro,
    private readonly usuario: Usuario
  ) {
    this.dataEmprestimo = new Date();
    this.dataDevolucaoPrevista = this.calcularDataDevolucao();
  }

  private calcularDataDevolucao(): Date {
    const data = new Date(this.dataEmprestimo);
    data.setDate(data.getDate() + Emprestimo.DIAS_EMPRESTIMO);
    return data;
  }

  getLivro(): Livro {
    return this.livro;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  getStatus(): StatusEmprestimo {
    return this.status;
  }

  getDataEmprestimo(): Date {
    return this.dataEmprestimo;
  }

  getDataDevolucaoPrevista(): Date {
    return this.dataDevolucaoPrevista;
  }

  isAtivo(): boolean {
    return this.status === StatusEmprestimo.ATIVO;
  }

  // Move Method: lógica de multa saiu de SistemaBiblioteca.calcularMulta()
  calcularMulta(): number {
    if (!this.isAtivo()) return 0;

    const hoje = new Date();
    const diasAtraso = Math.floor(
      (hoje.getTime() - this.dataDevolucaoPrevista.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    return diasAtraso > 0 ? diasAtraso * Emprestimo.VALOR_MULTA_DIA : 0;
  }

  finalizar(): void {
    this.status = StatusEmprestimo.DEVOLVIDO;
  }
}