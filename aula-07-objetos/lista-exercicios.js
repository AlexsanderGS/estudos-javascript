/* Praticando a criação e manipulação de objetos. Acesse e modifique propriedades, use loops com for...in e aplique a estrutura de objeto a cenários do dia a dia. */

console.group("Exercicio 1: ");
/* Criando um objeto pessoal
   Crie um objeto com seu nome, idade e profissão. */
const pessoal = {
  nome: "Alexsander",
  idade: 29,
  profissao: "Desenvolvedor Front-End",
};
console.log("Objeto Pessoal criado: ", pessoal);
console.groupEnd();

console.group("Exercicio 2:");
/* Acessando propriedades
   Acesse e exiba o valor da propriedade "nome" no console. */
console.log("Acessando o nome do objeto: ", pessoal.nome);
console.groupEnd();

console.group("Exercicio 3: ");
/* Atualizando valores
   Modifique a propriedade "idade" com um novo valor. */
pessoal.idade = 30;
console.log("Atualizando a idade: ", pessoal.idade);
console.groupEnd();

console.group("Exercicio 4: ");
/* Adicionando uma nova propriedade
Adicione ao objeto uma nova propriedade chamada "cidade". */
pessoal.cidade = "Canoas";
console.log("Objeto atualizado após inserir a propriedade cidade: ", pessoal);
console.groupEnd();

console.group("Exercicio 5: ");
/* Função com objeto
   Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
   A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa. */

const pessoa = {
  nome: "Alexsander",
  idade: 29,
  profissao: "Desenvolvedor Front-End",
};

function apresentarPessoa(pessoa) {
  return `Olá! Meu nome é: ${pessoa.nome}, Tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`;
}
console.log(apresentarPessoa(pessoa));
console.groupEnd();

console.group("Exercicio 6: ");
/* Lista de pessoas
   Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade. */

const pessoas = [
  {
    nome: "Alexsander",
    idade: 29,
  },

  {
    nome: "Eduardo",
    idade: 17,
  },

  {
    nome: "Cristiane",
    idade: 42,
  },
];
console.log("Array com 3 objetos representando uma pessoa: ", pessoas);
console.groupEnd();

console.group("Exercicio 7: ");
/* Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais. */

for (const pessoa of pessoas) {
  if (pessoa.idade >= 18) {
    console.log("Quem é maior de idade? ", pessoa.nome);
  }
}
console.groupEnd();

console.group("Exercicio 8: ");
/* Objeto com método
   Crie um objeto chamado usuario com as propriedades nome e saudacao.
   A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade. */

const usuario = {
  nome: "Alexsander",
  saudacao: function () {
    console.log("Olá! Seja bem-vindo " + usuario.nome);
  },
};
usuario.saudacao();
console.groupEnd();

console.group("Exercicio 9: ");
/* Listando propriedades com for...in
   Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício */
console.log(
  "Utilizando o laço for...in para listar as propriedades e valores do objeto pessoal:",
);
for (const chave in pessoa) {
  console.log("Chave: ", chave);
  console.log("Valor: ", pessoal[chave]);
}
console.groupEnd();

console.group("Exercicio 10: ");
/* Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade) */

const produto = {
  preco: 25.5,
  quantidade: 10,
};

let valorTotal = produto.preco * produto.quantidade;
console.log("Valor total da compra: R$", valorTotal.toFixed(2));
