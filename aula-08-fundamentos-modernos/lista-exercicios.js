/* Pratique os recursos modernos do JavaScript (ES6+), como destruturação, operadores rest e spread, uso de datas, modularização e objetos com construtores, aplicando essas    ferramentas a situações do dia a dia de uma pessoa desenvolvedora  */

console.group("Exercicio 1: ");
/* Destructuring em objetos
   Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas. */
const dadosPessoais = {
  nome: "Alexsander Galvão",
  idade: 29,
  email: "alexsanderga@gmail.com",
};

const { nome, idade, email } = dadosPessoais;
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("E-mail: ", email);
console.groupEnd();

console.group("Exercicio 2: ");
/* Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3. */
const linguagens = ["JavaScript", "Python", "Java"];

const [ling1, ling2, ling3] = linguagens;
console.log(ling1);
console.log(ling2);
console.log(ling3);
console.groupEnd();

console.group("Exercicio 3: ");
/* Rest operator em função
   Crie uma função que receba vários números como parâmetros usando o operador rest (...).
   Utilize um laço for para somar todos os valores recebidos e retorne o total. */

function somarValores(...numeros) {
  let result = 0;
  for (let i = 0; i < numeros.length; i++) {
    result += numeros[i];
  }
  return result;
}
console.log("Soma de todos os valores: ", somarValores(1, 5, 10, 15, 25));
console.groupEnd();

console.group("Exercicio 4: ");
/* Spread operator com arrays
  Crie dois arrays de frutas e combine-os usando o operador spread. */

const frutas = ["Uva", "Maça", "Banana"];
const maisFrutas = ["Morango", "Pêra", "Laranja"];

const todasFrutas = [...frutas, ...maisFrutas];

console.log("Todas as frutas: ", todasFrutas);
console.groupEnd();

console.group("Exercicio 5: ");
/* Spread operator com objetos
   Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread. */

const obj1 = {
  nome: "Alexsander Galvão",
};

const obj2 = {
  idade: 29,
};

const dadosCombinados = { ...obj1, ...obj2 };
console.log("Dados combinados: ", dadosCombinados);
console.groupEnd();

console.group("Exercicio 6: ");
/* Função com parâmetro default
   Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão. */

function saudacao(nome = "Visitante") {
  console.log(`Olá, ${nome}!`);
}
saudacao("Alexsander");
saudacao();
console.groupEnd();

console.group("Exercicio 7: ");
/* Trabalhando com datas
   Crie uma variável com a data atual e exiba o dia, mês e ano formatados. */

let dataAtual = new Date();
console.log(dataAtual.toLocaleDateString("pt-BR"));
console.groupEnd();

console.group("Exercicio 8: ");
/* Objeto com função construtora
   Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
   Em seguida, crie dois objetos Livro usando essa função.  */

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
  };
}

const livro1 = new Livro("O Hobbit", "J. R.R. Tolkien");
const livro2 = new Livro("O Silmarillion", "J. R.R. Tolkien");

console.log(livro1);
console.log(livro2);

console.groupEnd();

console.group("Exercicio 9: ");
/* Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings. */

const livro3 = new Livro("O Senhor dos Aneis", "J. R.R. Tolkien");
console.log(livro3.descrever());
console.groupEnd();
