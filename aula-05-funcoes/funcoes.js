/* Funções em JavaScript são blocos de construção essenciais, definidos pela palavra-chave function, que encapsulam um conjunto de instruções para realizar tarefas específicas,       permitindo reutilização e melhor organização do código. Elas só são executadas quando chamadas (invocadas) e podem receber parâmetros (entradas) e retornar valores.  */

/* Utilizamos a palavra reservada function para declarar a função, após isto temos que dar o nome a função. O nome da função precisa ser o máximo explicativo possível.
   Após isto, entre () colocamos o parametro desta função: Neste caso é NOME. Utilizamos {} para abrir o bloco de código e inserir a instrução. */
function saudacao(nome) {
  /* Chamamos o console log, indicando que essa é a instrução a ser executada nesta função, passando uma mensagem e o parametro da função. */
  console.log("Olá, ", nome);
}
/* Aqui chamamos(invocamos) a função e passamos o conteúdo do parametro ("Alexsander" e "Jaqueline" são os parametros). O resultado no terminal deve ser: "Olá, Alexsander." e "Olá, Jaqueline."
   Podemos chamar esta função repetidas vezes.*/
saudacao("Alexsander");
saudacao("Jaqueline");

/* Declaramos uma função com objetivo de calcular o dobro de um número. Damos um nome bem especifico e explicativo. Como parametro passamos uma variável chamada Número.*/
function calculaDobroDeUmNumero(numero) {
  /* Dentro do bloco de código, utilizamos a palavra reservada RETURN para indicar o que deverá ser retornado ao executar este bloco.
       O calculo é o numero * 2 */
  return numero * 2;
}
/* Aqui criamos uma variavel NumeroDobrado para armazenar o retorno da função. Essa variavel receber o chamado da função com o parametro (4). */
const numeroDobrado = calculaDobroDeUmNumero(6);
/* Chamamos o console log para exibir no terminal o resultado da execução da função e chamamos a variável numeroDobrado que recebeu o resultado da função. 
   O resultado deve ser: O dobro de 4 é: 8 */
console.log("O dobro de 6 é: ", numeroDobrado);
