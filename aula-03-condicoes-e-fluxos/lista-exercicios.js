/* Praticar a utilização de estruturas de decisão com if, else if, else, operador ternário e switch para criar fluxos de controle comuns em aplicações do dia a dia.  */

console.group("Exercicio 1:");
/* Verificação de idade para compra de bebida
   Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". 
   Caso contrário, mostre "Venda proibida para menores de 18 anos". */
let idade = 14;

if (idade >= 18) {
  console.log("Maior de idade: Pode comprar bebida alcoólica.");
} else
  console.log(
    "Menor de idade: Venda de bebida alcoólica proibida para menos de 18 anos!!",
  );
console.groupEnd();

console.group("Exercicio 2:");
/* Saudação de acordo com a hora
   Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 13 e 18, "Boa tarde"; caso contrário, "Boa noite". */
let horaAtual = 15;

if (horaAtual >= 6 && horaAtual < 12) {
  console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
console.groupEnd();

console.group("Exercicio 3: ");
/* Verificação de número positivo ou negativo
   Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero. */
let numero = -5;

if (numero === 0) {
  console.log("Zero!");
} else if (numero >= 1) {
  console.log("Número positivo!");
} else if (numero < 0) {
  console.log("Número negativo!");
}
console.groupEnd();

console.group("Exercicio 4: ");
/* Crie uma variável nota entre 0 e 10. 
   Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9). */
let notaDoAluno = 6;

if (notaDoAluno >= 9) {
  console.log("Nota do aluno: A (9-10)");
} else if (notaDoAluno >= 8) {
  console.log("Nota do aluno: B (8-9)");
} else if (notaDoAluno >= 6) {
  console.log("Nota do aluno: C (6-7.9)");
} else if (notaDoAluno >= 4) {
  console.log("Nota do aluno: D (4-5.9)");
} else {
  console.log("Nota do aluno: E (0-3.9");
}
console.groupEnd();

console.group("Exercicio 5: ");
/* Número par ou ímpar com ternário
   Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar. */
let num = 11;

num % 2 === 0
  ? console.log("O número é par!")
  : console.log("O número é impar!");
console.groupEnd();

console.group("Exercicio 6: ");
/* Menu com switch-case
   Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair". */
let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Opção selecionada: Cadastrar");
    break;
  case 2:
    console.log("Opção selecionada: Listar");
    break;
  case 3:
    console.log("Opção selecionada: Sair");
    break;
  default:
    console.log("Nenhuma opção selecionada.");
    break;
}
console.groupEnd();

console.group("Exercicio 7: ");
/* Validação de campo obrigatório
   Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". 
   Caso contrário, mostre "E-mail válido". */
let email = "";

if (email === "") {
  console.log("Preencha o campo de e-mail!");
} else {
  console.log("E-mail válido!");
}
console.groupEnd();

console.group("Exercicio 8: ");
/* Validação de senha segura
   Crie duas variáveis:
   senha
   senhaValida (valor true ou false, definido manualmente)

   Se senhaValida for verdadeira, mostre "Senha válida".
   Caso contrário, mostre "Senha muito curta". */
let senha = 1234;
let senhaValida = false;

if (senhaValida === true) {
  console.log("Senha válida!");
} else {
  console.log("Senha muito curta!");
}
console.groupEnd();

console.group("Exercicio 9: ");
/* Compra com saldo
   Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente". */
let saldoDisponivel = 50;
let valorCompra = 50;

if (valorCompra <= saldoDisponivel) {
  console.log("Compra aprovada!");
} else {
  console.log("Saldo insuficiente!");
}
console.groupEnd();

console.group("Exercicio 10: ");
/* Validação de formulário completo
  Crie três variáveis:
  nome
  email
  idade
  Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).

  Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
  Caso contrário, mostre "Por favor, preencha todos os campos corretamente". */
let nome = "Alura";
let email1 = "alura@alura.com";
let idade1 = "22";
let formularioValido = true;

if (nome != "" && email1 != "" && idade1 != "" && formularioValido === true) {
  console.log("Formulário enviado com sucesso!");
} else {
  console.log("Por favor, preencha todos os campos corretamente.");
}
