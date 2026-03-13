import { CalculoImposto } from "../interface/calculoImposto";

  class ImpostoAlimento implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return preco * qtd * 0.05;
  }
}