import { CalculoImposto } from "../interface/calculoImposto";
class ImpostoVestuario implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return preco * qtd * 0.1;
  }
}