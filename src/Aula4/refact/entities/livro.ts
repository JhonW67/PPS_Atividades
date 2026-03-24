import { StatusLivro } from "../enums/statusLivro";
import { ISBN } from "../value-objects/isbn";

export class Livro {
  private status: StatusLivro = StatusLivro.DISPONIVEL;

  constructor(
    private readonly titulo: string,
    private readonly autor: string,
    private readonly isbn: ISBN
  ) {
    if (!titulo || titulo.trim().length === 0) {
      throw new Error("Título do livro não pode ser vazio");
    }
    if (!autor || autor.trim().length === 0) {
      throw new Error("Autor do livro não pode ser vazio");
    }
  }

  getTitulo(): string {
    return this.titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  getIsbn(): ISBN {
    return this.isbn;
  }

  getStatus(): StatusLivro {
    return this.status;
  }

  isDisponivel(): boolean {
    return this.status === StatusLivro.DISPONIVEL;
  }

  marcarComoEmprestado(): void {
    if (!this.isDisponivel()) {
      throw new Error(`Livro "${this.titulo}" já está emprestado`);
    }
    this.status = StatusLivro.EMPRESTADO;
  }

  marcarComoDisponivel(): void {
    this.status = StatusLivro.DISPONIVEL;
  }

  toString(): string {
    return `${this.titulo} | ${this.autor} | ${this.isbn}`;
  }
}