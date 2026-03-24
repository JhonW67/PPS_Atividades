import { Emprestimo } from "../entities/emprestimo";
import { Livro } from "../entities/livro";
import { Usuario } from "../entities/usuario";
import { IRelatorioStrategy } from "../interfaces/iRelatorioStrategy";

export class RelatorioEmprestimos implements IRelatorioStrategy {
  gerar(
    _livros: Livro[],
    _usuarios: Usuario[],
    emprestimos: Emprestimo[]
  ): string {
    let sb = "=== RELATÓRIO DE EMPRÉSTIMOS ===\n";
    for (const emprestimo of emprestimos) {
      sb += `ISBN: ${emprestimo.getLivro().getIsbn()} | Usuário: ${emprestimo.getUsuario().getEmail()} | Status: ${emprestimo.getStatus()}\n`;
    }
    return sb;
  }
}