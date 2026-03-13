import { CalculoImposto } from "../interface/calculoImposto";

class ImpostoLivro implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return 0;
  }
}

export { ImpostoLivro };
