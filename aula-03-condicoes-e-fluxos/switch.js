/* Utilizamos a palavra reservada switch como uma forma de lidar com múltiplas condições baseadas em um valor específico. */

/* Declaramos uma variável notaDoAluno e atribuimos um valor. */
let notaDoAluno = 1;

/* Nota entre 9 ou 10: Excelente!
   Nota entre 7 ou 8: Boa!
   Nota entre 4 ou 6: Média!
   Nota entre 0 ou 3: Ruim! */

/* Utilizamos a palavra reservada SWITCH para começar a verificação, passando a variável a ser verificada.
   Utilizamos a palavra CASE seguida do valor a ser verificado, caso seja verdadeiro vai executar.
   Utilizamos a palavra reservada BREAK para "freiar" caso a verificação seja verdadeira e pare. 
   Utilizamos a palavra reservada DEFAULT para definir um valor padrão, caso nenhuma das verificações sejam verdadeiras, ou o valor da variável não seja informada.*/
switch (notaDoAluno) {
  case 10:
  case 9:
    console.log("Nota do aluno: Execelente!");
    break;
  case 8:
  case 7:
    console.log("Nota do aluno: Boa!");
    break;
  case 6:
  case 5:
  case 4:
    console.log("Nota do aluno: Média!");
    break;
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Nota do aluno: Ruim!");
    break;
  default:
    console.log("Nota do aluno não informada!");
    break;
}
