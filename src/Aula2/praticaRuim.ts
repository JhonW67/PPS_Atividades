class ProcessadorPedido {
calcularTotal(tipoProduto: string, preco: number, quantidade: number): number {
let total = preco * quantidade;
switch (tipoProduto) {
case "ELETRONICO":
total += total * 0.15; // 15% imposto
break;
case "ALIMENTO":
total += total * 0.05; // 5% imposto
break;
case "VESTUARIO":
total += total * 0.10; // 10% imposto
break;
}
return total;
}
processarPagamento(formaPagamento: string, valor: number): void {
switch (formaPagamento) {
case "CARTAO_CREDITO":
console.log(`Processando cartão: R$ ${valor}`);
break;
case "BOLETO":
console.log(`Gerando boleto: R$ ${valor}`);
break;
case "PIX":
console.log(`Gerando QR Code PIX: R$ ${valor}`);
break;
}
}
enviarConfirmacao(email: string, valor: number): void {
console.log(`Enviando email para ${email}: Seu pedido de R$ ${valor} foi confirmado!`);
}
}