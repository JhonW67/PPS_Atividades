interface ProcessadorPagamento {
  processar(valor: number): void;
}

export type { ProcessadorPagamento };