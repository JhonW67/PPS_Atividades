import { ProcessadorPagamento } from "../interface/processadorPagamento";

class PagamentoCripto implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Transferência de R$ ${valor} via criptografado confirmado.`);
  }
}

export { PagamentoCripto };