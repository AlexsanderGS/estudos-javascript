/* Este desafio em realizar um laço de repetição para contar quantos números pares e números impares existem entre 0 e 100. 
    O que o programa faz

    Percorrendo todos os números de 0 até 100
    Verificando se cada número é par ou ímpar
    Contando quantos de cada tipo existem */

/* Declaramos duas variaveis onde serão armazenados a quantidade de numeros pares e impares. */
let totalPares = 0;
let totalImpares = 0;

/* Começamos o laço de repetição FOR:
    Começa em 0 -> let contador = 0;
    Vai até 100 -> contador <= 100;
    Soma 1 a cada volta -> contador++ */
for (let contador = 0; contador <= 100; contador++) {
  /* Fazemos a verificação utilizando IF:
        % -> resto da divisão
        numero par -> resto da divisão por 2 é 0 */
  if (contador % 2 === 0) {
    /* Os contadores:
        O '++' soma 1 toda vez que encontrar um número daquele tipo. */
    totalPares++;
  } else {
    totalImpares++;
  }
}

console.log("Total de números pares encontrados: ", totalPares);
console.log("Total de números ímpares encontrados: ", totalImpares);
