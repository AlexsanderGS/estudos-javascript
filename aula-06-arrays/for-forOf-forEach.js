/* Aqui vamos utilizar os laços de repetição For, For-of e ForEach para percorrer a lista. */

/* Aqui criamos uma variável chamada frutas e atribuimos a ela uma lista de frutas.
   Importante: um array sempre terá o seu primeiro item começando com o indice 0. */
// Amora - indice 0
// Morango - indice 4
const frutas = ["Amora", "Banana", "Laranja", "Maça", "Morango"];

console.log("Percorrendo a lista com for:");
/* Aqui utilizamos um for para percorrer a lista, criando uma variável i começando com 0, e precisa ser menor que frutas.length, pois o último índice é length - 1, para que possa percorrer e finalizamos com o incrementa da variavel i. */
for (let i = 0; i < frutas.length; i++) {
  /* Aqui chamamos o console log para exibir no terminal o apenas o índice da lista. */
  console.log("Índice da lista: ", i);
  /* Aqui chamamos o console log para exibir o item da lista, no indice[i]. */
  console.log(frutas[i]);
}

console.log("\n--------------------//---------------- \n");

console.log("Percorrendo a lista com forEach: ");
/* Aqui utilizamos um forEach para percorrer a lista, passando dois valores (valor da lista e o indice) e chamamos um callback.  */
frutas.forEach((valor, indice) => {
  /* Aqui chamamos o console log para exibir na tela o índice e o valor da lista, passando como paramentro o índice e o valor. */
  console.log("Índice da lista: ", indice, valor);
});

console.log("\n--------------------//---------------- \n");

console.log("Percorrendo a lista com forOf: ");
/* Aqui utilizamos um for of para percorrer a lista. O for...of percorre diretamente os valores do array, sem precisar usar índice., seja percorrido.  */
for (const fruta of frutas) {
  /* Aqui chamamos o console log para exibir o item da lista, um por um. */
  console.log("Fruta da vez: ", fruta);
}
