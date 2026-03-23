import { CalculoImposto } from "./interface/calculoImposto";
import { ProcessadorPagamento } from "./interface/processadorPagamento";
import { ConfirmacaoEmail } from "./services/confirmacaoEmail";
import { ImpostoLivro } from "./class/impostoLivro";
import { PagamentoCripto } from "./class/pagamentoCripto";

class PedidoService {
  private emailService = new ConfirmacaoEmail();

  finalizarPedido(
    preco: number,
    qtd: number,
    imposto: CalculoImposto,
    pagamento: ProcessadorPagamento,
  ): void {
    const valorProduto = preco * qtd;
    const valorImposto = imposto.calcular(preco, qtd);
    const valorTotal = valorProduto + valorImposto;

    console.log(
      `O subtotal é R$ ${valorProduto} com imposto de R$ ${valorImposto}`,
    );

    pagamento.processar(valorTotal);
    this.emailService.enviar();

    console.log(`Pedido Finalizado.`);
  }
}

const pedidoService = new PedidoService();

pedidoService.finalizarPedido(
  3000,
  2,
  new ImpostoLivro(),
  new PagamentoCripto(),
);
