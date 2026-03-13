import { ProcessadorPagamento } from "../interface/processadorPagamento";

class PagamentoBoleto implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Gerando R$ ${valor} no Boleto`);
  }
}