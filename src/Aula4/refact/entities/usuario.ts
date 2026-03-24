import { TipoUsuario } from "../enums/tipoUsuario";
import { Email } from "../value-objects/email";

export class Usuario {
  private livrosEmprestados: number = 0;
  private readonly limiteEmprestimos: number;

  constructor(
    private readonly nome: string,
    private readonly email: Email,
    private readonly tipo: TipoUsuario
  ) {
    this.limiteEmprestimos = this.definirLimite(tipo);
  }

 
  private definirLimite(tipo: TipoUsuario): number {
    const limites: Record<TipoUsuario, number> = {
      [TipoUsuario.ALUNO]: 3,
      [TipoUsuario.FUNCIONARIO]: 5,
      [TipoUsuario.PROFESSOR]: 10,
    };
    return limites[tipo];
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): Email {
    return this.email;
  }

  getTipo(): TipoUsuario {
    return this.tipo;
  }

  getLivrosEmprestados(): number {
    return this.livrosEmprestados;
  }

  atingiuLimite(): boolean {
    return this.livrosEmprestados >= this.limiteEmprestimos;
  }

  incrementarEmprestimos(): void {
    if (this.atingiuLimite()) {
      throw new Error(
        `Usuário "${this.nome}" atingiu o limite de ${this.limiteEmprestimos} empréstimos`
      );
    }
    this.livrosEmprestados++;
  }

  decrementarEmprestimos(): void {
    if (this.livrosEmprestados > 0) {
      this.livrosEmprestados--;
    }
  }
}