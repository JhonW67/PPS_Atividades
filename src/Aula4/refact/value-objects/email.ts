export class Email {
  private readonly valor: string;

  constructor(valor: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(valor)) {
      throw new Error(`Email inválido: ${valor}`);
    }
    this.valor = valor.toLowerCase().trim();
  }

  getValor(): string {
    return this.valor;
  }

  equals(outro: Email): boolean {
    return this.valor === outro.valor;
  }

  toString(): string {
    return this.valor;
  }
}