import { ProcessadorPagamento } from "../interface/processadorPagamento";

class PagamentoPix implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Gerando R$ ${valor} no Pix`);
  }
}

export { PagamentoPix };