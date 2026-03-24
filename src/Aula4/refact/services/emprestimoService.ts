import { Emprestimo } from "../entities/emprestimo";
import { Livro } from "../entities/livro";
import { Usuario } from "../entities/usuario";
import { INotificacaoService } from "../interfaces/iNotificacaoService";
import { Email } from "../value-objects/email";
import { ISBN } from "../value-objects/isbn";
import { LivroService } from "./livroService";
import { UsuarioService } from "./usuarioService";

export class EmprestimoService {
  private emprestimos: Emprestimo[] = [];

  constructor(
    private readonly livroService: LivroService,
    private readonly usuarioService: UsuarioService,
    private readonly notificacao: INotificacaoService
  ) {}

  realizar(isbn: ISBN, emailUsuario: Email): Emprestimo {
    const livro = this.buscarLivroDisponivel(isbn);
    const usuario = this.buscarUsuarioComVaga(emailUsuario);

    livro.marcarComoEmprestado();
    usuario.incrementarEmprestimos();

    const emprestimo = new Emprestimo(livro, usuario);
    this.emprestimos.push(emprestimo);

    this.notificacao.enviar(
      emailUsuario,
      "Empréstimo Realizado",
      `Você emprestou: ${livro.getTitulo()}`
    );

    return emprestimo;
  }

  devolver(isbn: ISBN, emailUsuario: Email): number {
    const emprestimo = this.buscarEmprestimoAtivo(isbn, emailUsuario);
    const multa = emprestimo.calcularMulta();

    emprestimo.finalizar();
    emprestimo.getLivro().marcarComoDisponivel();
    emprestimo.getUsuario().decrementarEmprestimos();

    return multa;
  }

  calcularMulta(isbn: ISBN, emailUsuario: Email): number {
    const emprestimo = this.buscarEmprestimoAtivo(isbn, emailUsuario);
    return emprestimo.calcularMulta();
  }

  listarTodos(): Emprestimo[] {
    return [...this.emprestimos];
  }

  private buscarLivroDisponivel(isbn: ISBN): Livro {
    const livro = this.livroService.buscarPorIsbn(isbn);
    if (!livro) throw new Error(`Livro com ISBN ${isbn} não encontrado`);
    if (!livro.isDisponivel()) throw new Error(`Livro "${livro.getTitulo()}" está indisponível`);
    return livro;
  }

  private buscarUsuarioComVaga(email: Email): Usuario {
    const usuario = this.usuarioService.buscarPorEmail(email);
    if (!usuario) throw new Error(`Usuário com email ${email} não encontrado`);
    if (usuario.atingiuLimite()) throw new Error(`Usuário "${usuario.getNome()}" atingiu o limite de empréstimos`);
    return usuario;
  }

  private buscarEmprestimoAtivo(isbn: ISBN, email: Email): Emprestimo {
    const emprestimo = this.emprestimos.find(
      (e) =>
        e.getLivro().getIsbn().equals(isbn) &&
        e.getUsuario().getEmail().equals(email) &&
        e.isAtivo()
    );
    if (!emprestimo) {
      throw new Error(`Empréstimo ativo não encontrado para ISBN ${isbn} e email ${email}`);
    }
    return emprestimo;
  }
}