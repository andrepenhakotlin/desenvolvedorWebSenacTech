/*
Exercício 2.1
Faça um programa que leia 2 números, some-os e exiba 
uma mensagem com o resultado apenas se o resultado 
for maior que 100.
*/

const num1 = parseFloat(prompt("Digite um número: "));
const num2 = parseFloat(prompt("Digite mais um número: "));

const soma = num1 + num2;
numLimite = 100;

// if (soma > numLimite) 
// {
//     alert(`A soma dos dois numeros é: ${soma}`);
//     console.log("Números somados:", num1, num2);
//     console.log("Resultado:",soma);
// }

 soma > 100 ? alert(`A soma dos dois numeros é: ${soma}, que é maior que 100.`)
 : alert(`A soma dos números é ${soma}, que é menor ou igual a 100.`)

     console.log("Números somados:", num1, num2);
     console.log("Resultado:",soma);
 

