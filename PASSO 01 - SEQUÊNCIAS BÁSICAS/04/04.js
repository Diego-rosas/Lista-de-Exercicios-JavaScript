// Exercicio 04
// Função : Algoritmo que lê dois números inteiros e mostra o somatório entre eles.
// Autor : Diego Rosas
// Data : 05/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um numero: ', (numero1) =>{
    rl.question('Digite outro numero: ',(numero2) =>{
        const soma = parseInt(numero1) + parseInt(numero2);
        console.log('A soma entre', numero1, 'e', numero2,'eh igual a:',soma)
        rl.close();
    });
});