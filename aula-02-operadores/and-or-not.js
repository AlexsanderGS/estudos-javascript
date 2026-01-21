/* Declaramos a variavel idade e atribuimos um valor number a ela. */
let idade = 18;
/* Declaramos a variavel maiorDeIdade e fazemos a verificação se é maior ou igual a 18 anos. */
let maiorDeIdade = idade >= 18;
/* Declaramos a variavel possuiCNH e atribuimos um valor boolean a ela. */
let possuiCNH = false;
/* Declaramos a variavel podeDirigir e fazemos a verificação se ela pode dirigir utilizando o operador '&&' (AND). As duas condições precisam ser verdadeiras. */
let podeDirigir = maiorDeIdade && possuiCNH;
/* Chamamos o console log para exibir o resultado da variavel podeDirigir. O resultado deve ser false, pois a pessoa tem 18 anos mas não possui CNH. */
console.log("Essa pessoa pode dirigir? ", podeDirigir);

idade = 17;
maiorDeIdade = idade >= 18;
possuiPassaporte = true;
/* Declaramos a variavel viajaSozinho e fazemos a verificação se ela pode viajar sozinho utilizando o operador '||' (OR). Uma das condições precisam ser verdadeiras. */
let viajaSozinho = maiorDeIdade || possuiPassaporte;
/* Chamamos o console log para exibir o resultado da variavel viajaSozinho. O resultado deve ser true, pois a pessoa não tem 18 anos mas possui passaporte. */
console.log("A pessoa pode viajar sozinha? ", viajaSozinho);

/* Declaramos a variavel precisaDeAcompanhante e fazemos a verificação se ela precisa de acompanhante para viajar utilizando o operador '!' (NOT). */
let precisaDeAcompanhante = !maiorDeIdade;
/* Chamamos o console log para exibir o resultado da variavel precisaDeAcompanhante. O resultado deve ser true, pois a pessoa não tem 18 anos. */
console.log(
  "A pessoa precisa de acompanhante para viajar: ",
  precisaDeAcompanhante
);
