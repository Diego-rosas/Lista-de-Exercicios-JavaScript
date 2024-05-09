// Exercicio 07
// Função : Programa que lê um número real da entrada e mostra seu dobro e sua terça parte.
// Autor : Diego Rosas
// Data : 09/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um numero: ', (numero) => {
    const dobro = parseFloat(numero) * 2;
    const terca = parseFloat(numero) / 3;
    console.log("O dobro de", numero,"eh", dobro);
    console.log("A terça parte de", numero,"eh", terca);
    console.log();
    rl.close();
});