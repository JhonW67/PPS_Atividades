import { IRelatorioStrategy } from "../interfaces/iRelatorioStrategy";
import { RelatorioEmprestimos } from "../strategies/relatorioEmprestimos";
import { RelatorioLivros } from "../strategies/relatorioLivros";
import { RelatorioUsuarios } from "../strategies/relatorioUsuarios";
import { EmprestimoService } from "./emprestimoService";
import { LivroService } from "./livroService";
import { UsuarioService } from "./usuarioService";


export class RelatorioService {
  private readonly estrategias: Map<string, IRelatorioStrategy> = new Map([
    ["LIVROS", new RelatorioLivros()],
    ["USUARIOS", new RelatorioUsuarios()],
    ["EMPRESTIMOS", new RelatorioEmprestimos()],
  ]);

  constructor(
    private readonly livroService: LivroService,
    private readonly usuarioService: UsuarioService,
    private readonly emprestimoService: EmprestimoService
  ) {}

  // OCP: para adicionar novo relatório, basta registrar nova estratégia
  registrarEstrategia(tipo: string, estrategia: IRelatorioStrategy): void {
    this.estrategias.set(tipo, estrategia);
  }

  gerar(tipo: string): string {
    const estrategia = this.estrategias.get(tipo);
    if (!estrategia) {
      throw new Error(`Tipo de relatório desconhecido: ${tipo}`);
    }
    return estrategia.gerar(
      this.livroService.listarTodos(),
      this.usuarioService.listarTodos(),
      this.emprestimoService.listarTodos()
    );
  }
}