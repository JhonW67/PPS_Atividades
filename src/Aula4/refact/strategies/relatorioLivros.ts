import { Livro } from "../entities/livro";
import { IRelatorioStrategy } from "../interfaces/iRelatorioStrategy";

export class RelatorioLivros implements IRelatorioStrategy {
  gerar(livros: Livro[]): string {
    let sb = "=== RELATÓRIO DE LIVROS ===\n";
    for (const livro of livros) {
      sb += `${livro.getTitulo()} | ${livro.getAutor()} | ${livro.getStatus()}\n`;
    }
    return sb;
  }
}