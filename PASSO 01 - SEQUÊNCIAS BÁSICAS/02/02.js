// Funcao : Ler o nome de uma pessoa e dar boas vindas.
// Autor : Diego Rosas
// Data : 04/05/2024

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {

    console.log('Olá', nome,', é um prazer te conhecer!');
    rl.close();
});