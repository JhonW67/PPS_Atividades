import { TipoUsuario } from "./enums/tipoUsuario";
import { EmprestimoService } from "./services/emprestimoService";
import { LivroService } from "./services/livroService";
import { NotificacaoService } from "./services/notificacaoService";
import { RelatorioService } from "./services/relatorioService";
import { UsuarioService } from "./services/usuarioService";
import { Email } from "./value-objects/email";
import { ISBN } from "./value-objects/isbn";

class SistemaBiblioteca {
  private readonly livroService: LivroService;
  private readonly usuarioService: UsuarioService;
  private readonly emprestimoService: EmprestimoService;
  private readonly relatorioService: RelatorioService;

  constructor() {
    const notificacao = new NotificacaoService();
    this.livroService = new LivroService(notificacao);
    this.usuarioService = new UsuarioService(notificacao);
    this.emprestimoService = new EmprestimoService(
      this.livroService,
      this.usuarioService,
      notificacao
    );
    this.relatorioService = new RelatorioService(
      this.livroService,
      this.usuarioService,
      this.emprestimoService
    );
  }

  adicionarLivro(titulo: string, autor: string, isbn: string): void {
    this.livroService.adicionar(titulo, autor, new ISBN(isbn));
  }

  cadastrarUsuario(nome: string, email: string, tipo: string): void {
    this.usuarioService.cadastrar(nome, new Email(email), tipo as TipoUsuario);
  }

  realizarEmprestimo(isbn: string, emailUsuario: string): void {
    this.emprestimoService.realizar(new ISBN(isbn), new Email(emailUsuario));
  }

  devolverLivro(isbn: string, emailUsuario: string): number {
    return this.emprestimoService.devolver(new ISBN(isbn), new Email(emailUsuario));
  }

  calcularMulta(isbn: string, emailUsuario: string): number {
    return this.emprestimoService.calcularMulta(new ISBN(isbn), new Email(emailUsuario));
  }

  gerarRelatorio(tipo: string): string {
    return this.relatorioService.gerar(tipo);
  }
}