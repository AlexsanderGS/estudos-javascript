/* Os operadores REST e SPREAD, representados por três pontos (...), facilitam a manipulação de arrays no JavaScript. O Spread expande um array em elementos individuais (para clonar, combinar ou passar argumentos), enquanto o Rest agrupa elementos individuais em um novo array (geralmente usado em parâmetros de função ou desestruturação). */

/* Aqui criamos uma lista de frutas com array e passamos seus valores. */
const frutas = ["Maça", "Banana", "Goiaba"];
/* Exibimos no terminal a lista completa de frutas. */
console.log("Lista do array de frutas: ", frutas);

/* Aqui criamos outra lista de maisFrutas com array e passamos seus valores. */
const maisFrutas = ["Uva", "Morango", "Kiwi"];
/* Exibimos no terminal a lista completa do array de maisFrutas. */
console.log("\nLista do array de maisFrutas: ", maisFrutas);

/* Aqui utilizamos o operado spread para clonar o array de frutas */
const clone = [...frutas];
/* Exibimos no terminal a lista completa do array de frutas clonado.*/
console.log("\nClone do array de frutas utilizando operador spread: ", clone);

/* Aqui utilizamos o metodos PUSH para adicionar mais uma fruta ao array de fruta. Criando um novo array. */
frutas.push("Pitanga");
/* Exibimos no terminal a lista completa do array frutas com a pitanga adicionado. */
console.log("\nLista do array de frutas após adicionar Pitanga: ", frutas);

/* Aqui utilizamos o operado spread para unificar todos os arrays de frutas e maisFrutas. */
const todasAsFrutas = [...frutas, ...maisFrutas];
/* Exibimos no terminal a lista completa do array de frutas e maisFrutas unificados. */
console.log("\nUnificando todas as listas de frutas: ", todasAsFrutas);

/* Aqui utilizamos o operado REST para separar a primeira e a segunda fruta do restante da lista de todasAsFrutas */
const [primeira, segunda, ...restante] = todasAsFrutas;
/* Exibimos no terminal a primeira e a segunda fruta, separadas do restante dos elementos do array de todasAsFrutas. */
console.log("Primeira fruta: ", primeira);
console.log("Segunda fruta: ", segunda);
console.log("Restante das frutas: ", restante);
