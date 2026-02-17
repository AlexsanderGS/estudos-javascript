/* Aqui criamos uma variável e declaramos um array(lista) de números. */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* Chamamos o console log para exibir a lista no terminal. */
console.log("Todos os números do array: ", numeros);

/* Aqui utilizamos o metodo filter para filtrar a lista, filter percorre o array e retorna um novo array contendo apenas os elementos cuja condição retorna true.
   O filter pode mudar o tamanho do array. */
const numerosPares = numeros.filter((numero) => {
  /* Aqui passamos o retorno da condição, neste caso, para retornar todos os números pares. */
  return numero % 2 === 0;
});
/* Chamamos o console log para exibir o resultado e os números pares da lista. */
console.log("Todos os números pares do array: ", numerosPares);

/* Aqui utilizamos o metodo filter novamente. */
const numerosImpares = numeros.filter((numero) => {
  /* Desta vez, retornar os números impares da lista. */
  return numero % 2 != 0;
});
/* Chamamos o console log para exibir o resultado e os números impares da lista. */
console.log("Todos os números impares do array: ", numerosImpares);

/* Aqui utilizamos o metodos map para transformar os elementros do array. O map: percorre o array, retorna um novo array com o mesmo tamanho e transoforma cada elemento.
   O map sempre mantém o mesmo tamanho do array. */
const numerosDobrados = numeros.map((numero) => {
  /* O que deverá ser retornado é os números da lista dobrados, ou seja, o número vezes 2. */
  return numero * 2;
});
/* Chamamos o console logo para exibir a lista mapeada e os números dobrados. */
console.log(
  "Nosso array mapeado que retorna o números dobrados da lista: ",
  numerosDobrados,
);
