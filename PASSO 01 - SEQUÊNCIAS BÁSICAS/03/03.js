//Exercicio 03
// Função: Lê o nome e o salário de um funcionário, mostrando no final uma mensagem.
// Autor : Diego Rosas
// Data : 05/05/2024
// Seção de Declarações 

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o nome do funcionario(a): ', (nome) => {
  let nomeDoFuncionario = nome;
  console.log('O funcionario(a)', nomeDoFuncionario, 'teve um salário de R$',',00 em','.');   
  rl.close();
});

//console.log('O funcionario(a)', nomeDoFuncionario, 'teve um salário de R$',',00 em','.'); 
/*'Digite o salario do funcionario(a): ', (salario) => {
    const salarioDoFuncionario = salario;
    console.log(salarioDoFuncionario);
    rl.close();
}*/

/*rl.question('Digite o salario do funcionario(a): ', (salario) => {
    const salarioDoFuncionario = salario;
    
})

rl.question('Digite o mês correspodente ao salario: ', (mes) => {
    const mesDoSalario = mes;
    
})*/

//console.log('O funcionario(a)', nomeDoFuncionario, 'teve um salário de R$', salarioDoFuncionario,',00 em', mesDoSalario,'.')

