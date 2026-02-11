/* Arrays em JavaScript são estruturas de dados do tipo lista, utilizados para armazenar múltiplos valores de tipos variados (números, strings, objetos) em uma única variável. Eles são 
   dinâmicos, permitindo redimensionamento e alteração de conteúdo, com índices baseados em zero. Incluem métodos embutidos para manipulação, como push, pop, shift e unshift */

/* Aqui criamos uma variável chamada frutas e atribuimos a ela uma lista de frutas.
   Importante: um array sempre terá o seu primeiro item começando com o indice 0. */
// Amora - indice 0
// Morango - indice 4
const frutas = ["Amora", "Banana", "Laranja", "Maça", "Morango"];

/* Chamamos o console log para exibir a lista completa */
console.log(frutas);

/* Aqui chamamos o console log para exibir o primeiro item(fruta) da lista, passando a variável e o indice[0]. */
console.log("Primeira fruta da lista: ", frutas[0]);
/* Aqui chamamos o console log para exibir o último item(fruta) da lista, passando a variável e o indice[4]. */
console.log("última fruta da lista: ", frutas[4]);

/* Aqui chamamos o console log para exibir a quantidade total de itens(frutas) da lista, passando a variável e usando LENGHT(tamanho) para retornar o tamanho da lista. */
console.log("Total de frutas da lista: ", frutas.length);

/* Aqui usamos o comando PUSH para adicionar mais um item(fruta) a lista. E adicionamos a fruta Melância */
frutas.push("Melância");
/* Agora chamamos o console log para exibir a quantidade total de itens(frutas), após adicionar a fruta Melância. */
console.log("Total de frutas após adicionar a Melância: ", frutas.length);

/* E dessa vez, chamamos o console log para mostrar o último item da lista após adicionar mais itens. Utilizamos o comando LENGTH para trazer o último item e subtraimos por um, pois a lista começa no indice 0: frutas.lenght - 1. */
console.log(
  "Última fruta após adicionar mais frutas a lista: ",
  frutas[frutas.length - 1],
);
