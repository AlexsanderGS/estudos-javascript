
/* Tipos de variáveis: 
    string: Usado para textos (ex: "Ana").
    number: Para números, sejam inteiros (ex: 23) ou decimais (ex: 1.67).
    boolean: Representa verdadeiro ou falso (true ou false).
    undefined: Indica que uma variável foi declarada, mas não possui valor atribuído.
    null: Representa a ausência de valor, um valor nulo.
    symbol: Cria um valor único e imutável.
*/

let nome = "Ana";
let idade = 23;
let altura = 1.67;

/* Chamamos o console log passando o Typeof para que nos retorne o tipo da variável declarado para nome */
/* Mensagem que deve ser exibida no terminal: string */
console.log(typeof nome);
/* Chamamos o console log passando o Typeof para que nos retorne o tipo da variável declarado para idade */
/* Mensagem que deve ser exibida no terminal: number */
console.log(typeof idade);
/* Chamamos o console log passando o Typeof para que nos retorne o tipo da variável declarado para altura */
/* Mensagem que deve ser exibida no terminal: number */
console.log(typeof altura);

/* Declaramos uma variavel e atribuimos um valor booleano. */
let estaChovendo = true;
/* Mensagem que deve ser exibida no terminal: boolean */
console.log(typeof estaChovendo);

/* Declaramos uma variavel e não atribuimos nada. */
let cidade;
/* Mensagem que deve ser exibida no terminal: undefined */
console.log(typeof cidade);

/* Declaramos uma variavel e atribuimos um valor null. */
let estado = null;
/* Mensagem que deve ser exibida no terminal: null */
console.log(typeof nome);

/* Declaramos uma variavel e atribuimos um valor symbol. */
let simbolo = Symbol();
/* Mensagem que deve ser exibida no terminal: symbol */
console.log(typeof simbolo);
