/*O objetivo aqui é praticar a criação, modificação e leitura de variáveis. Assim, você desenvolverá o hábito de usar console.log() para imprimir mensagens e entender como o código está funcionando.  */

console.group("Exercício 1");
/* 1. Boas-vindas personalizadas
    Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!" */
let nome = "Alexsander Galvão";
console.log("Olá, ", nome, "! ", "Seja bem vindo(a) ao curso de JavaScript!");
console.groupEnd();

console.group("Exercício 2");
/* 2. Cálculo de idade
    Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos." */
let anoAtual = 2026;
let anoNascimento = 1996;

let idadePessoa = anoAtual - anoNascimento;
console.log("Voce tem ", idadePessoa, " anos.");
console.groupEnd();

console.group("Exercício 3");
/* 3. Mensagem de localização
    Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País." */
let cidade = "Canoas";
let estado = "Rio Grande do Sul";
let pais = "Brasil";
console.log("Você está em ", cidade, " - ", estado, ", ", pais);
console.groupEnd();

console.group("Exercício 4");
/* 4. Tipo da variável:
    Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável. */
let temCarteira = true;
console.log(typeof temCarteira);
console.groupEnd();

console.group("Exercício 5");
/* 5. Simulação bancária simples:
    Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando. */
let saldo = 0;
console.log("Saldo atual da conta: ", saldo);

saldo = saldo + 200;
console.log("Deposito de 200 reais realizado! Saldo atual da conta: ", saldo);

saldo = saldo - 50;
console.log("Saque de 50 reais realizado! Saldo atual da conta: ", saldo);
console.groupEnd();

console.group("Exercício 6");
/* 6. Média de notas:
    Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem. */
let matematica = 8;
let portugues = 7;
let ciencias = 6;

let media = (matematica + ciencias + portugues) / 3;
console.log("Média final das notas: ", media.toFixed(2));
console.groupEnd();

console.group("Exercício 7");
/* 7. Reajuste de salário:
    Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo. */
let salario = 3000;
console.log("Salário atual do funcionário: ", salario);

let aumento = salario * 0.1;
salario = salario + aumento;
console.log(
  "O funcionário recebeu um aumento de 10% devido seu progresso anual! Salário atual do funcionário: ",
  salario
);
console.groupEnd();

console.group("Exercício 8");
/* 8. Contador de cliques:
    Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações. */
let cliques = 0;

cliques = 1;
console.log("Cliques ", cliques);

cliques = 2;
console.log("Cliques ", cliques);

cliques = 3;
console.log("Cliques ", cliques);
console.groupEnd();

console.group("Exercício 9");
/* 9. Constantes não podem ser alteradas
    Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece. */
const pi = 3.14;
// pi = 4.15;
console.log("Valor do PI: ", pi);
/* Esse trecho de código apresentaria um erro no console. Pois uma variável declarada como CONST, não pode ter seu valor atribuido alterado. */
console.groupEnd();

console.group("Exercício 10");
/* 10. Concatenando tipos diferentes
    Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof. */
let mensagem = "Olá! Seja bem vindo!";
let numero = 2026;

let tipo = mensagem + numero;
console.log(typeof mensagem, typeof numero);
console.groupEnd();
