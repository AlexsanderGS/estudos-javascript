/* Aqui utilizamos o readline para interagir com o usuário pelo terminal. 
   Importamos o módulo nativo do Node.js require('readline'), para ler dados digitados no terminal e escrever mensagens no terminal. */
const readline = require("readline");

/* Criamos uma interface de comunicação entre o programa e o terminal, utilizando readline.createInterface(). */
const leitor = readline.createInterface({
  /* Esta linha de código reprente o que o usuário digita no teclado.
     stdin => standard input. */
  input: process.stdin,
  /* Esta linha de código representa o que o programa mostra no terminal.
     stdout => standard output */
  output: process.output,
});

/* Aqui utilizamos leitor.question para mostrar uma pergunta no terminal e espera uma digitação do usuário no terminal, após digitar, o usuário deve apertar enter.
   Utilizamos um arrow function como callback que receberá o (nome) digitado no terminal pelo usuário. Ou seja, quando o usuário responder, essa função será executada. */
leitor.question("Olá! Qual é o seu nome? ", (nome) => {
  /* Aqui chamamos o console log para exibir uma mensagem e o texto digitado pelo usuário. */
  console.log("Boas vindas ao nosso sistema! ", nome);

  /* Aqui fazemos outra pergunta ao usuário, uma pergunta aninhada.
     Fazemos isto dentro do callback da primeira, para garantir que essa pergunta só acontecerá depois que o primeiro valor for digitado. */
  leitor.question("Qual é a sua idade? ", (idade) => {
    /* Aqui utilizamos uma estrutura condicional com a idade digitada pelo usuário anteriormente. Para verificar se o usuário é maior de idade ou não. */
    if (idade >= 18) {
      console.log("Você já pode tirar sua CNH!");
    } else {
      console.log("Você ainda não pode tirar sua CNH!");
    }

    /* Aqui fechamos a interface utilizando leitor.close(), sem isso o programa fica rodando para sempre. */
    leitor.close();
  });
});
