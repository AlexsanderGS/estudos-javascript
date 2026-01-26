/* Laço for:
   Utilizamos o for para repetir uma tarefa um número determinado de vezes.
   A estrutura do for consiste em:
   Um contador que é iniciado (e existe apenas dentro do bloco for).
   Uma condição que deve ser atendida para que o laço continue executando.
   Um incremento que é executado após cada repetição. */

/* Utiizamoa a palavra reservada FOR para iniciar um looping.
   Criamos uma variável dentro do FOR e iniciamos o contador. Por padrão sempre começa com zero, mas também podemos escolher o valor a ser iniciado.
   indicamos até quando o contador irá se repetir, neste exemplo até que a contagem seja menor ou igual a 10.
   após isso, informamos qual será a forma de incremento a esse looping, neste caso, vai incrementar de um em um.  */
for (let contador = 1; contador <= 10; contador++) {
  /* Chamamos o console log para exibir os números durante o looping, deverá ser exibido do número 1 ao 10, sequencialmente. */
  console.log("Número atual: ", contador);
}

console.log("\n------------------------//----------------\n");

/* Neste exemplo buscamos os números pares encontrados durante o looping. */
for (let numero = 0; numero <= 10; numero++) {
  if (numero % 2 === 0) {
    console.log("Número par encontrado: ", numero);
  }
}

console.log("\n------------------------//----------------\n");

/* Neste exemplo buscamos os números pares encontrados durante o looping. */
for (let numero = 0; numero <= 10; numero++) {
  if (numero % 2 > 0) {
    console.log("Número ímpar encontrado: ", numero);
  }
}

console.log("\n------------------------//----------------\n");

/* Neste exemplo, estamos percorrendo a palavra declarada na variável letra por letra.
   essa string funciona como uma lista de caracteres: 
    0 1 2 3 4 5 6 7 8
    c a l o p s i t a  
   Utilizamos a a condição palavra.length para pegar o tamanho da string */
let palavra = "calopsita";
/* let contado = 0 -> Começa do índice 0 (primeira letra).
    contado < palavra.lenght -> Repete enquanto o índice for menor do que 9 (tamanho da string).
    contador++ -> a cada volta no for, soma 1 no contador.  
    os valores do contador vão ser: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8. */
for (let contador = 0; contador < palavra.length; contador++) {
  /* palavra[contador] -> Aqui estamos acessando cada letra pelo índice.
       contador: 0 ->  palavra[contador]: "c"
       contador: 1 ->  palavra[contador]: "a"
       contador: 2 ->  palavra[contador]: "l"
       contador: 3 ->  palavra[contador]: "o"
       contador: 4 ->  palavra[contador]: "p"
       contador: 5 ->  palavra[contador]: "s"
       contador: 6 ->  palavra[contador]: "i"
       contador: 7 ->  palavra[contador]: "t"
       contador: 8 ->  palavra[contador]: "a" */
  console.log(palavra[contador]);
}
