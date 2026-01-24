/* Condicionais IF, ELSE e ELSE IF */

/* Declaramos uma variável idade e atribuimos. */
let idade = 17;

/* Utilizamos a condicional IF (se) e passamos dentro de parenteses a condição a ser verificada, neste caso, verifica se a idade é igual ou maior a 18 anos, se for, deve imprimir na tela a mensagem: É maior de idade.
   Utilizamos a condicional ELSE (se não), não sendo necessário passar uma condição a ser verificada, apenas irá retornar no console o resultado diferente do IF. Deve imprimir na tela a mensagem: É menor de idade.  */
if (idade >= 18) {
  console.log("É maior de idade!");
} else {
  console.log("É menor de idade!");
}

console.log("-------------------------------");

/* Declaramos uma variável notaDoAlune e atribuimo um valor. */
let notaDoAluno = 8;

/* Nota entre 9 ou 10: Excelente!
   Nota entre 7 ou 8: Boa!
   Nota entre 4 ou 6: Média!
   Nota entre 0 ou 3: Ruim! */

/* Utilizamos a condicional IF (SE) e ELSE IF (SE NÃO SE) para fazer multiplas verificações das condições informadas. Neste caso, cada verificação deve retornar uma mensagem diferente para cada nota do aluno, sendo elas: Nota excelente, boa, média e ruim. */
if (notaDoAluno >= 9) {
  console.log("Nota do aluno: Excelente!");
} else if (notaDoAluno >= 7) {
  console.log("Nota do aluno: Boa!");
} else if (notaDoAluno >= 4) {
  console.log("Nota do aluno: Média!");
} else {
  console.log("Nota do aluno: Ruim!");
}
