import { ProcessadorPagamento } from "../interface/processadorPagamento";

class PagamentoCartao implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Processando R$ ${valor} no Cartão`);
  }
}

export { PagamentoCartao };