interface CalculoImposto {
  calcular(preco: number, qtd: number): number;
}

interface ProcessadorPagamento {
  processar(valor: number): void;
}

class ImpostoEletronico implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return preco * qtd * 0.15;
  }
}

class ImpostoAlimento implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return preco * qtd * 0.05;
  }
}

class ImpostoVestuario implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return preco * qtd * 0.1;
  }
}

class PagamentoCartao implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Processando R$ ${valor} no Cartão`);
  }
}

class PagamentoBoleto implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Gerando R$ ${valor} no Boleto`);
  }
}

class PagamentoPix implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Gerando R$ ${valor} no Pix`);
  }
}

class ImpostoLivro implements CalculoImposto {
  calcular(preco: number, qtd: number): number {
    return 0;
  }
}
class PagamentoCripto implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Transferência de R$ ${valor} via criptografado confirmado.`);
  }
}

class ConfirmacaoEmail {
  enviar(): void {
    console.log("Email enviado para o cliente!");
  }
}

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
