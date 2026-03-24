import { Livro } from "../entities/livro";
import { Usuario } from "../entities/usuario";
import { IRelatorioStrategy } from "../interfaces/iRelatorioStrategy";

export class RelatorioUsuarios implements IRelatorioStrategy {
  gerar(
    _livros: Livro[],
    usuarios: Usuario[]
  ): string {
    let sb = "=== RELATÓRIO DE USUÁRIOS ===\n";
    for (const usuario of usuarios) {
      sb += `${usuario.getNome()} | ${usuario.getEmail()} | Tipo: ${usuario.getTipo()}\n`;
    }
    return sb;
  }
}