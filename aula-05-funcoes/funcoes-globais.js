/* Funções globais no JavaScript são procedimentos nativos disponíveis em qualquer lugar do código, sem necessidade de importação. Elas fazem parte do objeto global (como window no navegador ou global no Node.js), facilitando tarefas comuns como manipulação de números, strings e execução de código.  */

/* Criamos uma função normal, quando for chamada, vai apenas imprimir a mensagem no console. */
function saudacao() {
  /* Chamamos o console log para exibir a mensagem no terminal. */
  console.log("Olá, como vai? ");
}
/* Usamos uma função global reservada chamada setTimeout, passando dois parametros, a função saudacao e o delay para ser executada em milissegundos. 
   saudacao aqui é um callback, por que foi passada como parametro e será executada por outra função mais tarde, depois de 3 segundos. */
setTimeout(saudacao, 3000);

/* Aqui criamos uma variavel contador que começa com 0, e será usada para contar o tempo decorrido */
let contador = 0;

/* Outra função global do JS é a setInterval, que coloca um intervalo entre cada execução do bloco de código. 
   Essa função será executada a cada intervalo de tempo e utilizamos '=>' para sinalizar que é uma arrow function. Essa arrow function também é um callback.
   */
const id = setInterval(() => {
  /* Aqui incrementamos o contado utilizando '++', o contador aumenta em 1, simulando "1 segundo a mais". */
  contador++;
  /* Mostra no console quantos segundos se passaram. 
     Cada execução do setInterval imprime uma linha nova.*/
  console.log("Tempo decorrido (sem segundos): ", contador);
  /* Aqui está o controle do loop, quando o contador chegar em 10 (10s), chamamos o clearInterval e isso para a execução automatica. */
  if (contador === 10) {
    /* Precisamos passar o id que o setInterval gera ao exercutarmos essa função, por isto armazenamos esse id na variavel const id */
    clearInterval(id);
  }
  /* Aqui declaramos qual o intervalo de tempo. O 1000 significa 1 segundo.
     A cada 1s o callback é executado, o contador aumenta e o console imprime o valor. */
}, 1000);
