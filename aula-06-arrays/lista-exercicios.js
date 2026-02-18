/*Praticando a criação, manipulação e iteração de arrays usando for, for...of e métodos funcionais como forEach, map e filter, aplicando esses conceitos em problemas do cotidiano.  */

console.group("Exercicio 1: ");
/* Lista de nomes
   Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha. */

const nomes = ["Ana", "Bruno", "Marcele", "João", "Maria"];

console.log("Nomes da lista: ");
for (i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
console.groupEnd();

console.group("Exercicios 2: ");
/* Adicionar e remover itens
   Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois. */

const frutas = ["Amora", "Banana", "Laranja", "Maça", "Morango"];

console.log("Todas as frutas da lista: ", frutas);

frutas.push("Melância");
console.log("Lista de frutas após adicionar a Melância: ", frutas);

frutas.shift(0, 1);
console.log("Lista de frutas após remover a primeira fruta: ", frutas);
console.groupEnd();

console.group("Exercicio 3: ");
/* Contar itens do array
   Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length. */

const cidades = [
  "Canoas",
  "Porto Alegre",
  "Novo Hamburgo",
  "Esteio",
  "São Leopoldo",
];

console.log(
  "Quantidade total de itens da lista usando lenght: ",
  cidades.length,
);
console.groupEnd();

console.group("Exercicio 4: ");
/* Somar todos os números
   Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.  */

let numeros = [12, 2, 15, 24, 5, 16, 37, 8, 19, 7];

let somaNumeros = 0;

console.log("Números da lista: ", numeros);
for (let i = 0; i < numeros.length; i++) {
  somaNumeros += numeros[i];
}
console.log("A soma total dos números da lista é: ", somaNumeros);
console.groupEnd();

console.group("Exercicio 5: ");
/* Média de notas
   Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7. */

let notas = [4, 10, 5, 8];

let soma = 0;
console.log("As notas do aluno foram: ", notas);
for (i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

if (media >= 7) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno reprovado!");
}
console.groupEnd();

console.group("Exercicio 6: ");
/* Mensagens personalizadas com forEach
   Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.  */
const usuarios = ["Alex", "Bruna", "Ana", "Lucas", "Tiago"];

usuarios.forEach((usuario) => {
  console.log("Olá, ", usuario, "!");
});
console.groupEnd();

console.group("Exercicio 7: ");
/* Descontos com map
   Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto. */

let precos = [12.5, 50, 25];

console.log("Preços da lista: ", precos);
let precoComDesconto = precos.map((preco) => {
  return preco * 0.9;
});

console.log("Preço com desconto de 10%: ", precoComDesconto);
console.groupEnd();

console.group("Exercicio 8: ");
/* Filtrar valores altos
   Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado. */
const idades = [18, 21, 17, 15, 39, 12];

console.log("Lista das idades: ", idades);
const maiorIdade = idades.filter((idade) => {
  return idade >= 18;
});

console.log("Maiores de idade: ", maiorIdade);
console.groupEnd();

console.group("Exercicio 9: ");
/* Simulando carrinho de compras
   Crie um array com os preços de produtos em um carrinho de compras.
   Utilize um laço for ou for...of para calcular o valor total da compra.

   Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console. */

const precoProduto = [12, 25, 30];

console.log("Preços dos produtos: ", precoProduto);

let preco = 0;
for (let i = 0; i < precoProduto.length; i++) {
  preco += precoProduto[i];
}
console.log("Preço total da compra: ", preco);

console.log(
  "Preço total da compra com desconto de 20%: ",
  preco * (0.8).toFixed(2),
);
console.groupEnd();

console.log("Exercicio 10: ");
/*Lista de tarefas
  Crie dois arrays:

  um array com nomes de tarefas
  outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
  Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
  Exiba a lista de tarefas pendentes no console.  */

const tarefas = ["Fazer compras", "Estudar", "Treinar", "Correr", "Ler"];
let concluida = [true, false, true, true, false];

console.log("Lista de tarefas: ", tarefas);
let tarefasPendentes = tarefas.filter(function (tarefa, index) {
  return concluida[index] === false;
});

console.log("Tarefas pendentes: ", tarefasPendentes);
