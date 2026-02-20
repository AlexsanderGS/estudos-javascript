/* Destructuring (ou desestruturação) é uma funcionalidade do JavaScript (ES6) que permite extrair dados de arrays ou propriedades de objetos diretamente para variáveis distintas, utilizando uma sintaxe concisa e legível. Ela simplifica o acesso a dados complexos, substituindo o acesso repetitivo por chaves ou índices. */

/* Aqui criamos um objeto pessoa e passamos três atributos. */
const pessoa = {
  nome: "Nathalia",
  idade: 17,
  profissao: "Estudante",
};

/* Aqui utilizamos o destructuring do objeto pessoa e declarando as propriedades que serão desestruturadas.
   Crie variáveis chamadas nome e idade pegando esses valores do objeto pessoa. */
const { nome, idade } = pessoa;
/* Aqui chamamos o console log para exibir o resultado os atributos que fizemos destructuring. */
console.log(nome);
console.log(idade);

/* Aqui fazer o destructuring dentro de uma função, essa função recebe uma objeto inteiro, mas se "importa" apenas com os atributos que passamos entre chaves.
   A função espera receber um objeto com as propriedades nome e idade, e já faz a desestruturação nos parâmetros. */
function saudacao({ nome, idade }) {
  console.log("Olá, ", nome);
  if (idade >= 18) {
    console.log("Maior de idade.");
  }
}
saudacao(pessoa);

/* Aqui criamos um array de frutas e definimos os valores. */
const frutas = ["Uva", "Banana"];
/* Aqui fazemos o destructuring do array, informando as posições que vamos utilizar.
   Seria basicamente fazer: const primeira = frutas[0] e const segunda = frutas[1] */
const [primeira, segunda] = frutas;
