export class ISBN {
  private readonly valor: string;

  constructor(valor: string) {
    if (!valor || valor.trim().length === 0) {
      throw new Error("ISBN inválido: não pode ser vazio");
    }
    this.valor = valor.trim();
  }

  getValor(): string {
    return this.valor;
  }

  equals(outro: ISBN): boolean {
    return this.valor === outro.valor;
  }

  toString(): string {
    return this.valor;
  }
}