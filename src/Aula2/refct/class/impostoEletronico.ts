import { CalculoImposto } from "../interface/calculoImposto";

class ImpostoEletronico implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return preco * qtd * 0.15;
  }
}