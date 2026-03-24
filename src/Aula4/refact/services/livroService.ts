import { Livro } from "../entities/livro";
import { INotificacaoService } from "../interfaces/iNotificacaoService";
import { Email } from "../value-objects/email";
import { ISBN } from "../value-objects/isbn";

 export class LivroService {
  private livros: Livro[] = [];

  constructor(private readonly notificacao: INotificacaoService) {}

  adicionar(titulo: string, autor: string, isbn: ISBN): Livro {
    const livro = new Livro(titulo, autor, isbn);
    this.livros.push(livro);

    this.notificacao.enviar(
      new Email("admin@biblioteca.com"),
      "Novo Livro",
      `Novo livro: ${titulo} de ${autor}`
    );

    return livro;
  }

  buscarPorIsbn(isbn: ISBN): Livro | null {
    return this.livros.find((l) => l.getIsbn().equals(isbn)) ?? null;
  }

  listarTodos(): Livro[] {
    return [...this.livros];
  }
}