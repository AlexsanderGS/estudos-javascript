/* Praticando o uso de laços for, while e do...while para repetir ações de forma controlada. Resolva situações em que o código precisa executar várias vezes, como em jogos, listas ou cálculos progressivos */

console.group("Exercicio 1: ");
/* Contador de 1 a 10
   Use um for para mostrar no console os números de 1 até 10, um por linha. */

for (let contador = 1; contador <= 10; contador++) {
  console.log("Número: ", contador);
}
console.groupEnd();

console.group("Exercicio 2: ");
/* Soma de 1 a 100
   Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa. */

let somaDosNumeros = 0;

for (let contador = 1; contador <= 100; contador++) {
  somaDosNumeros = somaDosNumeros + contador;
}
console.log("A soma de todos os números de 1 a 100 é: ", somaDosNumeros);
console.groupEnd();

console.group("Exercicio 3: ");
/* Tabuada personalizada
   Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.  */

let tabuada = 4;

for (let i = 1; i <= 10; i++) {
  console.log("4 x", i, " = ", tabuada * i);
}
console.groupEnd();

console.group("Exercicio 4: ");
/* Contagem regressiva
   Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!". */

let contagem = 10;

while (contagem >= 0) {
  console.log(contagem);
  contagem--;
}
console.log("Contagem finalizada!");
console.groupEnd();

console.group("Exercicio 5: ");
/* Receber números até digitar 0
   Simule a digitação de números usando uma variável numeroDigitado.
   Use um do...while para repetir a execução até que o valor seja 0.
   Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final. */

let numeroDigitado = 7;
let contador = 0;
do {
  console.log(numeroDigitado);

  if (numeroDigitado !== 0) {
    contador++;
  }
  numeroDigitado--;
} while (numeroDigitado !== 0);
console.log("Quantidade de número diferente de zero digitados: ", contador);
console.groupEnd();

console.log("Exercicio 6: ");
/* Jogo do número secreto
   Crie uma variável numeroSecreto com valor fixo.
   Simule até 3 tentativas usando um for.
   Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

   "Acertou!" se for igual
   "Tente novamente" se for diferente */

let numeroSecreto = 5;
let numeroTentado;
for (let i = 0; i <= 3; i++) {
  if (i === 1) {
    numeroTentado = 3;
  } else if (i === 2) {
    numeroTentado = 7;
  } else {
    numeroTentado = 5;
  }

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente!");
  }
}
console.groupEnd();

console.group("Exercicio 7: ");
/* Idade ao longo dos anos
   Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual. */

let anoNascimento = 2016;
let anotAtual = 2026;

for (let i = anoNascimento; i <= anotAtual; i++) {
  console.log("Em " + i + " você tinha " + (i - anoNascimento) + " anos.");
}
console.groupEnd();

console.group("Exercicio 8: ");
/* Listando números pares
   Mostre todos os números pares entre 1 e 50 usando for. */

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Números pares: ", i);
  }
}
console.groupEnd();

console.group("Exercicio 9: ");
/* Contar múltiplos de 3 entre 1 e 100
   Mostre no console quantos números entre 1 e 100 são divisíveis por 3. */

let numerosMultiplosDe3 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    numerosMultiplosDe3++;
  }
}
console.log("Números entre 1 e 100 divisíveis por 3: " + numerosMultiplosDe3);
console.groupEnd();

console.group("Exercicio 10: ");
/* Menu com repetição
Crie uma variável opcao.
Use um do...while para exibir repetidamente as opções:

1 - Ver saldo
2 - Fazer depósito
3 - Sair
O menu deve continuar sendo exibido até que a opção seja 3.
Mostre no console a ação correspondente a cada opção. */

let opcao;
let passo = 0;

do {
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);
