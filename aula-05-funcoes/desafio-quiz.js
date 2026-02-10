/* Este desafio consiste em criarmos um quiz de perguntas e respostas, para praticar entrada de dados no termial em JS.
   A pergunta deve aparecer no termial e aguardar a resposta do usuário, 
   mostra se a resposta foi correta ou incorreta e no final mostra a quantidade de acertos e uma mensagem. 
   
   Objetivos: 
    // TODO: Incrementar acertos se respondeu corretamente.
    // TODO: Se acertou tudo: Parabéns! Gabaritou o Quiz!
            //       Se acertou somente duas: Muito bem! Continue assim!
            //       Se acertou somente uma: Bom! Continue melhorando!
            //       Se não acertou nenhuma: Não acertou nenhuma, continue praticando! 
*/

// Importa o módulo readline do Node.js, que permite ler dados digitados no terminal
const readline = require("readline");

// Cria uma interface de leitura, conectando entrada (teclado) e saída (terminal)
const rl = readline.createInterface({
  // Entrada padrão (o que o usuário digita)
  input: process.stdin,
  // Saída padrão (o que aparece no terminal)
  output: process.stdout,
});

// Exibe uma mensagem inicial de boas-vindas
console.log("Bem-vindo(a) ao Quiz de JavaScript!");

// Informa ao usuário como responder às perguntas
console.log("Responda com a letra correta: a, b ou c \n");

// Variável que vai armazenar quantas perguntas o usuário acertou
let acertos = 0;

// Primeira pergunta do quiz
// rl.question exibe a pergunta e aguarda o usuário digitar uma resposta
rl.question(
  "1) Qual palavra usamos para criar uma função? \n (a) Define \n (b) Function \n (c) Create \n > ",
  (resposta1) => {
    // Callback: esse bloco só executa DEPOIS que o usuário digitar algo

    if (resposta1.toLocaleLowerCase() === "b") {
      // Verifica se a resposta digitada foi a correta
      console.log("Resposta correta!");
      // Incrementa o contador de acertos
      acertos++;
    } else {
      console.log("Resposta incorreta! \n");
    }

    rl.question(
      "2) Qual dessas é uma estrtutura de repetição? \n (a) Loopar \n (b) Repeat \n (c) For \n > ",
      (resposta2) => {
        if (resposta2.toLocaleLowerCase() === "c") {
          console.log("Resposta correta!");
          acertos++;
        } else {
          console.log("Resposta incorreta! \n");
        }

        rl.question(
          "3) Qual valor é considerado falsy em JavaScript? \n (a) 1 \n (b) 0 \n (c) 'texto' \n > ",
          (resposta3) => {
            if (resposta3.toLocaleLowerCase() === "b") {
              console.log("Resposta correta!");
              acertos++;
            } else {
              console.log("Resposta incorreta! \n");
            }

            // Após responder todas as perguntas, exibimos o resultado final

            // Se acertou todas as perguntas
            if (acertos === 3) {
              console.log(
                "Total de acertos: ",
                acertos,
                " Parabéns! Gabaritou o Quiz!",
              );
            }
            // Se acertou duas perguntas
            if (acertos === 2) {
              console.log(
                "Total de acertos: ",
                acertos,
                " Muito bem! Continue assim!",
              );
              // Se acertou uma perguntas
            } else if (acertos === 1) {
              console.log(
                "Total de acertos: ",
                acertos,
                " Bom! Continue melhorando!",
              );
              // Se não acertou nenhuma
            } else {
              console.log("Não acertou nenhuma, continue praticando!");
            }

            // Fecha a interface readline, encerrando o programa
            rl.close();
          },
        );
      },
    );
  },
);
