import { Emprestimo } from "../entities/emprestimo";
import { Livro } from "../entities/livro";
import { Usuario } from "../entities/usuario";

export interface IRelatorioStrategy {
  gerar(
    livros: Livro[],
    usuarios: Usuario[],
    emprestimos: Emprestimo[]
  ): string;
}