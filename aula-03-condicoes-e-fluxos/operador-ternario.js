/* Operador ternário: '?' */

/* Declaramos uma variavel idade e atribuimos um valor. */
let idade = 17;

/* O operador ternário é uma alternativa para a instrução IF. Com a sintaxe condição ? resultado1 : resultado2 */
/* Passamos a condição da variável idade e a execução deverá ser da seguinta forma: se '?' condição for verdadeira (true) o operador retornará o valor de resultado1, se não ':', ele retorna o valor de reultado2. */
idade >= 18
  ? console.log("É maior de idade!")
  : console.log("É menor de idade!");

console.log("--------------------//-----------------------------");

/* Declaramos uma variável notaDoAlune e atribuimo um valor. */
let notaDoAluno = 3;

/* Nota entre 9 ou 10: Excelente!
   Nota entre 7 ou 8: Boa!
   Nota entre 4 ou 6: Média!
   Nota entre 0 ou 3: Ruim! */

notaDoAluno >= 9
  ? console.log("Nota do aluno: Excelente!")
  : notaDoAluno >= 7
    ? console.log("Nota do aluno: Boa!")
    : notaDoAluno >= 4
      ? console.log("Nota do aluno: Média!")
      : console.log("Nota do aluno: Ruim!");

/* Devemos sempre analisar qual a melhor alternativa para a nossa implementação. Código bom não é apenas código curto e sim legivel. As vezes utilizar o IF trás uma compreensão maior a quem estiver lendo o código. */
