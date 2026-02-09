/* HOF: Higher-Order Function -> É uma função que recebe outra função como parametro. */
/* O callback é a função que você passa como parâmetro e que é executada dentro de outra função. */

/* Criamos uma função genérica calcular que recebe dois numeros e outra função como parametros. */
function calcular(numero1, numero2, operacao) {
  /* Aqui chamamos outra função dinamicamente. */
  return operacao(numero1, numero2);
}

/* Aqui criamos a função SOMA para realizar o calculo de dois numeros e abrimos o bloco de código. */
function soma(num1, num2) {
  /* Aqui retornamos o resultado da soma */
  return num1 + num2;
}
/* Armazemos o resultado da função calcular na constante e fazemos o callback passando a SOMA(operação) como parametro. */
const resultadoSoma = calcular(3, 8, soma);
/* Chamamos o console log e exibismo o resultado no console. */
console.log("O resultado da soma é: ", resultadoSoma);

function subtracao(num1, num2) {
  return num1 - num2;
}
const resultadoSubtracao = calcular(3, 8, subtracao);
console.log("O resultado da Subtração é: ", resultadoSubtracao);

function multiplicar(num1, num2) {
  return num1 * num2;
}
const resultadoMultiplicacao = calcular(3, 8, multiplicar);
console.log("O resultado da Multiplicação é: ", resultadoMultiplicacao);

function divisao(num1, num2) {
  return num1 / num2;
}
const resultadoDivisao = calcular(3, 8, divisao);
console.log("O resultado da Divisão é: ", resultadoDivisao);
