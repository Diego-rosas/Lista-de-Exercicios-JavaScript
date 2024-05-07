// Exercicio 05
// Função : Calcula a media de duas notas e mostra o resultado.
// Autor : Diego Rosas
// Data : 07/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Nota 1: ', (nota1) => {
    rl.question('Nota 2: ', (nota2) => {
        const soma = parseFloat(nota1) + parseFloat(nota2);
        const media = soma/2;
        console.log('A média entre', nota1, 'e', nota2,'eh igual a',media);
        rl.close();
    });    
});