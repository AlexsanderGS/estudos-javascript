/* Laço de repetição while e do while:
   O while executa um bloco de código enquanto uma condição for verdadeira, verificando a condição antes de cada execução. 
   Já o do while executa o bloco de código pelo menos uma vez e, em seguida, verifica a condição para as próximas iterações.  */

/* Declaramos uma variável e atribuimos um valor a ela. */
let numero = 1;
/* Utilizamos a palavra reservada WHILE para indicar o começo do laço. O while só entra no bloco SE a condição fora verdadeira ANTES. 
    numero começa valendo 1.
    testa a condição: numero <= 10 -> true
    executa o bloco: número atual: 1
    numero++ -> agora vale 2.
    isso se repete até: numero = 10 -> imprime
    numero++ -> vira 11. Fazendo com que o próximo teste falhe: 11 <= 10 -> false.
    o looping para.*/
while (numero <= 10) {
  console.log("Número atual: ", numero);
  numero++;
}

console.log("\n-----------------------//--------------------\n");

/* Declaramos uma variável e atribuimos um valor a ela. */
let num = 1;
/* Utilizamos a palavra reservada DO primeiro e depois WHILE. O DO executa o bloco SEM TESTAR antes e depois verifica a condição. 
    num = 1.
    entra no bloco direto: Número atual: 1;
    num++ -> vira 2 
    testa: 2 <= 10 -> true
    repete até num virar 11 */
do {
  console.log("Número atual: ", num);
  num++;
} while (num <= 10);

console.log("\n-----------------------//--------------------\n");

/* Neste exemplo buscamos os números pares encontrados durante o looping. */
let par = 0;
while (par <= 10) {
  if (par % 2 === 0) {
    console.log("Número par encontrado: ", par);
  }
  par++;
}

console.log("\n-----------------------//--------------------\n");

/* Neste exemplo buscamos os números ímpares encontrados durante o looping. */
let impar = 0;
while (impar <= 10) {
  if (impar % 2 > 0) {
    console.log("Número ímpar encontrado: ", impar);
  }
  impar++;
}

console.log("\n-----------------------//--------------------\n");

/* Neste exemplo, estamos percorrendo a palavra declarada letra por letra. */
let palavra = "calopsita";
let contador = 0;
do {
  console.log(palavra[contador]);
  contador++;
} while (contador < palavra.length);
