/* A diferença entre: var, let e const 
    1 - Variável global - Não utilizada mais atualmente.
    2 - var - Entendemos como usar a palavra reservada var para declarar variáveis, uma forma mais antiga, mas ainda relevante em alguns contextos.
    3 - let - Descobrimos que let é a forma moderna de declarar variáveis em JavaScript, sendo a opção mais utilizada na maioria dos casos. LET permite a atualização de valores da variável.
    4 - Aprendemos a usar const para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado após a atribuição inicial.
*/

/* Declara a variável IDADE e atribui (=) um valor. */
/* Utilizamos let nesta variável, pois idade é um valor sempre alterada. */
let idade = 29;

/* Chama o console.log para passar uma mensagem e devolver uma resposta no terminal. */
/* A mensagem que deverá ser exibida no terminal é: Minha idade atual é: 29 */
console.log("Minha idade atual é: ", idade);

/* Declara uma nova variável no padrão CamelCase (não se usa acento, espaço ou caracteres especiais em variável). E atribui um valor. */
/* Utilizamos const nesta variável, pois a data de um aniversário nunca é alterada. */
dataAniversario = "11 de outubro";

/* Chama o console.log para passar uma mensagem e devolver uma resposta no terminal. */
/* A mensagem que deverá ser exibida no terminal é: Meu aniversário é dia: 11 de outubro */
console.log("Meu aniversário é dia: ", dataAniversario);

/* Podemos atualizar o valor da variável idade, atribuindo um novo valor */
idade = 30;

/* Novamente passa uma mensagem ao console.log e exibe no terminal */
/* A mensagem que deverá ser exibida no terminal é: Minha idade após o aniversário é: 30 */
console.log("Minha idade após o aniversário é: ", idade);
