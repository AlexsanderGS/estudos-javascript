/* Criamos o objeto pessoa e definimos suas propriedades (chave e valor). */
const pessoa = {
  nome: "Alexsander",
  idade: 29,
  pets: ["Belinha", "Laila"],
  nacionalidade: "Brasileiro",
};

console.log("\nUtilizando for in para percorrer as propriedades.");
/* Aqui utilizamos o metodo FOR IN, O for...in percorre as chaves enumeráveis do objeto. Obs: Embora funcione com arrays, for...in é mais indicado para objetos.*/
for (const chave in pessoa) {
  console.log("Chave: ", chave);
  console.log("Valor: ", pessoa[chave]);
}

console.log(
  "\nUtilizando metodos keys, values e entries para buscar as propriedades do objeto.",
);
/* Aqui utilizamos os metodos keys para buscar as chaves do objeto pessoa. */
const chaves = Object.keys(pessoa);
/* Aqui utilizamos o metodo values para buscar valores do objeto pessoa. */
const valores = Object.values(pessoa);

/* Aqui utilizamos o metodo entries para buscar as chaves e os valores do objeto pessoa. Object.entries retorna um array de arrays no formato [chave, valor]. */
const entradas = Object.entries(pessoa);

console.log("Chaves: ", chaves);
console.log("Valores: ", valores);
console.log("Entradas (chave / valor): ", entradas);

for (const [chave, valor] of Object.entries(pessoa)) {
  console.log(chave, valor);
}
