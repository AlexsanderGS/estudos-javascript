/* Arrow functions são uma sintaxe concisa para escrever funções no JavaScript, introduzidas no ES6, usando a "seta" =>. 
   Elas tornam o código mais curto e limpo do que as function expressions tradicionais, sendo ideais para funções anônimas e callbacks. Elas herdam o this do contexto pai (lexical scope) e não podem ser usadas como construtores.  */

/* Guardamos a função na constante e atribuimos a função que queremos a esta constancia. Passamos o parametro entre parenteses.
   Utilizamos '=>' para indicar uma "flecha" e abrimos o escopo da função com {}. */
const saudacao = (nome) => {
  /* Chamamos o console log, passando uma mensagem e o parametro. */
  console.log("Olá, ", nome);
};
/* Invocamos a função e passamos o conteúdo do parametro. O resultado no terminal deve ser: "Olá, Alexsander." e "Olá, Jaqueline."  */
saudacao("Alexsander");
saudacao("Jaqueline");

/* Se a função tiver apenas um parametro, não é necessário colocar entre () e nem abrir o escopo da função. Podemos declarar da seguinte forma: */
/* Guardamos a função na constante e atribuimos direto o parametro sem (), após isso utilizamos '=>' para indicar a arrow function e depois chamamos o que seria o escopo do bloco. */
const acenando = nome2 => console.log("Acenando para: ", nome2);
acenando("João");

/* Neste exemplo, guardamos a função da na constante e atribuimos o parametro, depois utilizamos '=>' para indicar a arrow function e chamamos o que deverá ser retornado.
   Lembrete: nas arrow functions, não é necessário usar a palavra reservada RETURN. */
const calculaDobroDeUmNumero = numero => numero * 2;

/* Aqui criamos uma variavel NumeroDobrado para armazenar o retorno da função. Essa variavel receber o chamado da função com o parametro (4). */
const numeroDobrado = calculaDobroDeUmNumero(6);
/* Chamamos o console log para exibir no terminal o resultado da execução da função e chamamos a variável numeroDobrado que recebeu o resultado da função. 
   O resultado deve ser: O dobro de 4 é: 8 */
console.log("O dobro de 6 é: ", numeroDobrado);


