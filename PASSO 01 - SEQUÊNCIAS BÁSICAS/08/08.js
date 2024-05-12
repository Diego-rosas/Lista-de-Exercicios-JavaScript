// Exercicio 08
// Função : Programa que lê um numero que representa uma distância em metros da entrada e mostra os valores relativos em outras medidas.
// Autor : Diego Rosas
// Data : 10/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite uma distância em metros: ", (distancia) => {
    const distanciaKm = parseFloat(distancia) / 1000;
    const distanciaHm = parseFloat(distancia) / 100;
    const distanciaDam = parseFloat(distancia) / 10;
    const distanciaDm = parseFloat(distancia) * 10;
    const distanciaCm = parseFloat(distancia) * 100;
    const distanciaMm = parseFloat(distancia) * 1000;

    console.log("A distância de", distancia,"m corresponde a: ");
    console.log();
    console.log(distanciaKm,"km");
    console.log(distanciaHm,"Hm");
    console.log(distanciaDam,"Dam");
    console.log(distanciaDm,"Dm");
    console.log(distanciaCm,"Cm");
    console.log(distanciaMm,"Mm");
    rl.close();
});