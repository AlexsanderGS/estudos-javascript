/* O objetivo aqui é aplicar operadores aritméticos, lógicos e de comparação em situações práticas, como simulações de sistemas simples e validações de dados.  */

console.group("Exercicio 1: ");
/* 1. Verificação de maioridade
   Crie uma variável idade. Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.
   Dica: o resultado deve ser true ou false. */

let idade = 18;
console.log("Idade: ", idade);

let maiorDeIdade = idade >= 18;
console.log("A idade da pessoa é igual ou maior a 18? ", maiorDeIdade);
console.groupEnd();

console.group("Exercicio 2: ");
/* 2. Situação do aluno
   Crie duas variáveis com notas de um aluno. Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7. */

let nota1 = 7;
let nota2 = 6;
console.log("Nota 1: ", nota1);
console.log("Nota 2: ", nota2);

let media = (nota1 + nota2) / 2;
console.log("Média das notas: ", media);

let verificaMedia = media >= 7;
console.log("A média da nota é maior ou igual a 7? ", verificaMedia);
console.groupEnd();

console.group("Exercicio 3: ");
/* 3. Simulação de troco
   Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido. */

let valorCompra = 35.9;
let valorPago = 50;
console.log("Valor da compra: R$ ", valorCompra);
console.log("valor Pago: R$ ", valorPago);

let troco = valorPago - valorCompra;
console.log("Troco a receber: R$ ", troco.toFixed(2));
console.groupEnd();

console.group("Exercicio 4: ");
/* 4. Validação de senha
   Crie duas variáveis com senhas digitadas em momentos diferentes. Exiba no console o resultado da comparação que verifica se as senhas são iguais. */

let senha1 = 1234;
console.log("Senha digitada: ", senha1);

let senha2 = 12345;
console.log("Senha digitada: ", senha2);

let confereSenha = senha1 === senha2;
console.log("As senhas são iguais: ", confereSenha);
console.groupEnd();

console.group("Exercicio 5: ");
/* 5. Controle de faltas
   Crie as variáveis totalAulas e faltas. Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite. */

let totalAulas = 25;
let faltas = 5;
console.log("Total de aulas: ", totalAulas);
console.log("Faltas: ", faltas);

let porcentagemFaltas = totalAulas * 0.25;
let limiteFaltas = porcentagemFaltas > 25;
console.log("As faltas ultrapassam os limites? ", limiteFaltas);
console.groupEnd();

console.group("Exercicio 6: ");
/* 6. Verificação de login
   Crie duas variáveis booleanas: temLogin e temSenha. Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras. */

const temSenha = true;
const temLogin = true;
console.log("Tem senha? ", temSenha);
console.log("Tem login? ", temLogin);

let verifica = temSenha && temLogin;
console.log("Possui login e senha? ", verifica);
console.groupEnd();

console.group("Exercicio 7: ");
/* 7. Valor negado
   Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa. */

let disponivel = false;
console.log("Esta disponível? ", disponivel);

let verificaDisponivel = !disponivel;
console.log("Esta disponível? ", verificaDisponivel);
console.groupEnd();

console.group("Exercicio 8: ");
/* 8. Condições compostas
   Crie duas variáveis numéricas. Exiba no console o resultado da expressão que verifica se:
   os dois números são pares e os dois números são iguais. */

let numero1 = 8;
let numero2 = 8;
console.log("Número 1: ", numero1);
console.log("Número 2: ", numero2);

let ambosPares = numero1 % 2 === 0 && numero2 === 0;
console.log("Os dois números são pares? ", ambosPares);

let ambosIguais = numero1 === numero2;
console.log("Os dois números são iguais? ", ambosIguais);
console.groupEnd();

console.group("Exercicio 9: ");
/* 9. Calculadora de porcentagem
   Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X." */

let valor = 120;
console.log("Valor: ", valor);

let porcentagem = valor * 0.15;
console.log("15% de 120 é igual a: ", porcentagem);
console.groupEnd();

console.group("Exercicio 10: ");
/* 10. Ordem de operações
   Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma. */

let calculo = 2 + 3 * 5;
console.log("Resultado do cálculo: ", calculo);
console.log(
  "Nesta expressão a multiplicação é feita primeiro por uma convenção chamada Ordem das Operações."
);
console.groupEnd();
