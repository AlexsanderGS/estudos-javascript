/* Hoisting é o comportamento do JavaScript de "elevar" as declarações de variáveis para o topo do seu contexto de execução. */

/* Chamamos o console log para exibir uma mensagem antes da declaração da variável. */
/* A mensagem que deve aparecer é: Minha idade é: undefined. */
console.log("Minha idade é: ", idade);

/* Apenas utilizando a declaração var é possível visualizar o HOISTING. 
   Variáveis declaradas como let e const não é feito HOISTING, devolvendo um erro de referencia no console. ,
   Variáveis globais não fazem HOISTING, devolvendo um erro de definição no console.*/
var idade = 29;

/* Chamamos o console log para exibir uma mensagem após da declaração da variável. */
/* A mensagem que deve aparecer é: Minha idade é: 29. */
console.log("Minha idade é: ", idade);