function depositar(indice, valor) {
if (indice < 1 || indice > contas.length) {
console.log("Conta não encontrada."); return;
}
contas[indice - 1].saldo += valor;
console.log("Depósito de R$ " + valor.toFixed(2) +
" para " + contas[indice-1].titular);
}
function sacar(indice, valor) {
if (indice < 1 || indice > contas.length) {
console.log("Conta não encontrada."); return;
}
let c = contas[indice - 1];
if (c.saldo < valor) {
console.log("Saldo insuficiente!"); return;
}
c.saldo -= valor;
console.log("Saque de R$ " + valor.toFixed(2) +
" da conta de " + c.titular);
}
// Teste
criarConta("Bruno Costa", 500);
depositar(1, 200);
sacar(2, 100);
listarContas();
