/* Declaramos duas variaveis numeroUm e numeroDois e atribuimos dois valores do tipo number. */
let numeroUm = 15;
let numeroDois = 20;
/* Declaramos a variável igual para realizar a comparação, utilizando '==' para verificar se os números são iguais. */
const igual = numeroUm == numeroDois;
/* Chamamos o console log para exibir o resultado da variável igual. Resultado deve aparecer como false, pois os números não são iguais. */
console.log("O primeiro número é igual ao segundo número? ", igual);

/* Declaramos a variável diferente para realizar a comparação, utilizando '!=' para verificar se os números são diferentes. */
const diferente = numeroUm != numeroDois;
/* Chamamos o console log para exibir o resultado da variável diferente. Resultado deve aparecer como true, pois os números são diferentes. */
console.log("O primeiro número é diferente do segundo número? ", diferente);

/* Declaramos a variável maior para realizar a comparação, utilizando '>' para verificar se o numeroUm é maior do que o numeroDois. */
const maior = numeroUm > numeroDois;
/* Chamamos o console log para exibir o resultado da variável maior. Resultado deve aparecer como false, pois os numeroUm não é maior do que o numeroDois. */
console.log("O primeiro número é maior do que o segundo número? ", maior);

/* Declaramos a variável menor para realizar a comparação, utilizando '<' para verificar se o numeroUm é menor do que o numeroDois. */
const menor = numeroUm < numeroDois;
/* Chamamos o console log para exibir o resultado da variável menor. Resultado deve aparecer como true, pois os numeroUm é menor do que o numeroDois. */
console.log("O primeiro número é menor do que o segundo número? ", menor);

/* Declaramos a variável maiorIgual para realizar a comparação, utilizando '>=' para verificar se o numeroUm é igual OU maior que o numeroDois. */
const maiorIgual = numeroUm >= numeroDois;
/* Chamamos o console log para exibir o resultado da variável maiorIgual. Resultado deve aparecer como false, pois os numeroUm não é maior nem igual ao numeroDois. */
console.log(
  "O primeiro número é maior OU igual ao segundo número? ",
  maiorIgual
);

/* Declaramos a variável menorIgual para realizar a comparação, utilizando '<=' para verificar se o numeroUm é igual OU menor que o numeroDois. */
const menorIgual = numeroUm <= numeroDois;
/* Chamamos o console log para exibir o resultado da variável menorIgual. Resultado deve aparecer como true, pois os numeroUm é menor ou igual ao numeroDois. */
console.log(
  "O primeiro número é maior OU igual ao segundo número? ",
  menorIgual
);

/* Para uma comparação estrita entre um tipo de atribuição ou outro, como por exemplo number e string, utilizamos operadores diferentes. */
/* Declaramos duas variaveis numeroNumber e numeroString e atribuimos dois valores: um do tipo number e outro do tipo string. */
let numeroNumber = 20;
let numeroString = "25";

/* Declaramos a variável igualEstrito para realizar a comparação, utilizando '===' para verificar se o numeroNumber é igual ao numeroString. */
let igualEstrito = numeroNumber === numeroString;
/* Chamamos o console log para exibir o resultado da variável igualEstrito. Resultado deve aparecer como false, pois os numeroNumber não é igual ao numeroString. */
console.log(
  "Na comparação estrita, o primeiro número é igual ao segundo número? ",
  igualEstrito
);

/* Declaramos a variável diferenteEstrito para realizar a comparação, utilizando '!==' para verificar se o numeroNumber é diferente do numeroString. */
let diferenteEstrito = numeroNumber !== numeroString;
/* Chamamos o console log para exibir o resultado da variável diferenteEstrito. Resultado deve aparecer como true, pois os numeroNumber é diferente do numeroString. */
console.log(
  "Na comparação estrita, o primeiro número é diferente do segundo número? ",
  diferenteEstrito
);
