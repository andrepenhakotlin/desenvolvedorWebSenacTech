/*
Exercício 1.1
Faça um programa que exiba 3 números na tela.

Dica - exibindo (ou "imprimindo") números na tela:
*/

const nome = "ANDRÉ LUIZ BARBOSA PENHA"; 
const cidade = "Alvorada";
const idade = 17

console.log('Nome:', nome);
console.log('Idade:', idade);
//console.log('Profissão:', profissao);
console.log('Cidade:', cidade);
const profissao = 'programador';


const num1 = 1;
const num2 = '2';
console.error(num1 + num2); 
console.info(num1 + num2);//Tem a mesma função do log que é mostrar na tela.
console.log(num1 + num2);//Tem a mesma função do info que é mostrar na tela.

if(idade >= 18){
    console.log('Você é maior de idade, Você tem:', idade, 'anos');

    } else {
        console.error('Você é menor de idade, Você tem:', idade, 'anos');
}
    
profissao !== 'Programador' ? console.log('Você é programador') : console.error('você não e programador')