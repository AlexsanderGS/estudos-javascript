/* Os operadores rest e spread, introduzidos no ES6 e representados por '...', usam o mesmo simbolo, mas o comportamento depende do contexto. São fundamentais para manipular arrays e objetos em JavaScript, simplificando o código. O Rest agrupa elementos dispersos em um array, enquanto o Spread expande um array ou objeto em elementos individuais. */

/* Aqui declaramos um objeto e passamos três atributos, nome, idade e profissão. */
let camila1 = {
  nome: "Camila",
  idade: 29,
  profissao: "Desenvolvedora",
};
console.log("Objeto camila1: \n", camila1);

/* Aqui usamos o operador spread representada por '...' e informamos que queremos espalhar o conteúdo do objeto camila1, para fazer alguma alteração nos atributos. */
const camila2 = { ...camila1 };
/* Aqui alteramos o atributo idade de camila1 e adicionamos ao objeto camila2 (clonando o objeto), como se ela tivesse feito aniversário, por exemplo. */
camila2.idade = 30;
/* Chamamos o console log e exibimos o objeto com o atributo alterado. */
console.log("\nObjeto camila2 após aniversário: \n", camila2);

/* Aqui utilizamos o operador spread para espalhar o conteúdo do objeto e alterar e também adicionar propriedades ao objeto. Obs. Quando duas propriedades tem o mesmo nome, a última sobrescreve a anterio. Nosso caso: profissão. */
camila1 = {
  ...camila2,
  profissao: "Desenvolvedora Senior",
  temCNH: true,
};
console.log("\nObjeto após alteração e adição de propriedades: ", camila1);

/*Aqui utilizamos o operador REST para separar um atributo do restente dos atributos dos objetos. Extraimos a propriedade nome e usamos o operador rest para agrupar as demais propriedades em um novo objeto chamados restante.
  Aqui o restente vira um novo objeto com tudo que não foi extraido.  */
const { nome, ...restante } = camila1;

console.log("Atributo separado: ", nome);
console.log("Restante dos atributos do objeto: ", restante);
