/* Objetos são como uma espécie de "super variáveis" que armazenam uma "coleção de valores" referenciados por nome, e que podem ser recuperados para serem utilizados em diversas      outras partes de um programa. Em JavaScript, quase tudo é tratado como objeto, exceto tipos primitivos. */

/* Iniciamos uma variável com nome pessoa e atribuimos um objeto abrindo {} para identificar um objeto. */
const pessoa = {
  /* Aqui passamos as propriedades deste objeto, sempre indicando chave (lado esquerdo) e valor (lado direito). Atributos podem conter qualquer valor que seja aceito pelo JS. */
  nome: "Ana",
  idade: 26,
  temCNH: true,
};

/* Aqui mostramos que podemos adicionar uma nova propriedade a este objeto, mesmo fora do escopo, passando a variavel pessoa e a propriedade que vamos adicionar. */
pessoa.sobrenome = "Paula";

/* Aqui chamamos o console log para exibir no terminal o resultado da busca pelo nome do objeto, passando a variavel.propriedade. */
console.log("Nome: ", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);

console.log(
  "\n ------------------------------ // --------------------------- \n",
);

/* Aqui declaramos outra variável, com nome de livro e indicamos a abertura de um objeto. */
const livro = {
  /* Passamos as propriedade deste objeto. */
  titulo: "O Hobbit",
  autor: "J. R.R Tolkien",
  paginas: 310,
};

/* Aqui adicionamos mais duas propriedades ao objeto, um valor booleano e um array com alguns valores dentro. */
livro.publicado = true;
livro.idiomas = ["Inglês", "Português BR", "Espanhol", "Italiano"];

/* Aqui chamamos o console log para exibir o resultado de cada chamada das propriedade do objeto livro. */
console.log("Titulo do livro: ", livro.titulo);
console.log("Autor: ", livro.autor);
console.log("Número de páginas: ", livro.paginas);
console.log("Livro públicado: ", livro.publicado);
console.log("Idiomas disponíveis: ", livro.idiomas);
