// Exercicio 09
// Função : Algoritmo que lê quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar.
// Autor : Diego Rosas
// Data : 17/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Quantia na carteira: ", (quantiaReais) => {
    const dolar = 3.45;
    const quantidadeDolar = parseFloat(quantiaReais) / dolar;
    console.log("Você pode comprar: ", quantidadeDolar,"dolar(es)!")
    rl.close();
});