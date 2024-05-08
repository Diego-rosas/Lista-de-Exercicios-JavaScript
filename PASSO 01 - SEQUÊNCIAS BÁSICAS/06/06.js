// Exercicio 06
// Função : Programa que lê um número inteiro da entrada e mostra seu sucessor e antecessor
// Autor : Diego Rosas
// Data : 08/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um numero: ', (numero) => {
    const antecessor = parseInt(numero) - 1;
    const sucessor = parseInt(numero) + 1;
    console.log("O numero antecessor de", numero,"eh", antecessor);
    console.log("O numero sucessor de", numero,"eh", sucessor);
    console.log();
    rl.close();
});

