/* Lista de exercicios para praticar a criação de funções simples e reaproveitáveis, para entender parâmetros e retornos, arrow functions e explorar o conceito de callbacks em situações controladas. */

console.group("Exercicio 1: ");
/* Função de saudação
   Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada. */

function saudacao(nome) {
  console.log("Olá! Seja bem-vindo(a)! ", nome);
}
saudacao("Alexsander");
console.groupEnd();

console.group("Exercicio 2: ");
/*  Função com parâmetros
    Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."*/

function apresentaPessoa(nome, idade) {
  console.log("Olá, meu nome é ", nome, "e tenho ", idade, "anos!");
}
apresentaPessoa("Alexsander", 29);
console.groupEnd();

console.group("Exercicio 3: ");
/* Cálculo de IMC
   Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
   A função deve calcular o IMC utilizando a fórmula:
   IMC = peso / (altura * altura) */

function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}
console.log("Seu IMC é: ", calculaIMC(75, 1.8).toFixed(2));
console.groupEnd();

console.group("Exercicio 4: ");
/* Verificar aprovação
   Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário. */

function verificarAprovacao(nota) {
  if (nota >= 7) {
    console.log("Aprovado!");
  } else {
    console.log("Reprovado!");
  }
}
verificarAprovacao(6);
console.groupEnd();

console.group("Exercicio 5: ");
/* Número par ou ímpar
   Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores. */

function ehPar(numero) {
  return numero % 2 === 0;
}
console.log(ehPar(6));
console.groupEnd();

console.group("Exercicio 6: ");
/* Função soma
   Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa. */

function soma(num1, num2) {
  return num1 + num2;
}
console.log(`A soma dos números 15 e 25 é: `, soma(15, 25));
console.groupEnd();

console.group("Exercicio 7: ");
/* Reutilizando código
   Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
   A função deve receber dois parâmetros: valorCompra e valorPago. */

let valorCompra = 27.5;
let valorPago = 50;

console.log("Valor da compra: R$ ", valorCompra);
console.log("Valor Pago: R$ ", valorPago);

function calcularTroco(valorCompra, valorPago) {
  return valorPago - valorCompra;
}
console.log("Troco a receber: R$ ", calcularTroco(27.5, 50));
console.groupEnd();

console.group("Exercicio 8: ");
/*Arrow function
  Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.  */
const somaArrow = (nume1, nume2) => nume1 + nume2;
console.log("A soma dos números 15 e 25 é: ", somaArrow(15, 25));
console.groupEnd();

console.group("Exercicio 9: ");
/* Callback simples
   Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!". */
function executarAcao(acao) {
  acao();
}
executarAcao(function () {
  console.log("Executando ação!");
});
console.groupEnd();

console.group("Exercicio 10: ");
/* Desafio do quiz
   Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada. 
   (simule a resposta com uma variável).  */

function fazerPergunta(pergunta, respostaCorreta) {
  let respostaUsuario = respostaCorreta; // simulação da resposta

  if (respostaUsuario === respostaCorreta) {
    console.log("Resposta correta!");
  } else {
    console.log("Resposta errada!");
  }
}
fazerPergunta("Qual é a capital do Brasil?", "Brasília");
console.groupEnd();
