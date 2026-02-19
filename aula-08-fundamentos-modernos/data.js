/* Em JavaScript, "data" é manipulada através do objeto Date, que é uma API nativa (embutida) usada para trabalhar com datas e horas em aplicações. Ao contrário de outras linguagens, o JavaScript não possui um tipo de dado "data" primitivo específico; em vez disso, ele utiliza o construtor new Date() para criar instâncias que representam um momento único no tempo, com precisão de milissegundos. */

/* Aqui chamamos a funcionalidade(objeto) Date do JS para trabalhar com datas. E criamos uma instância usando a palavra reservada NEW. */
const agora = new Date();
/* Aqui chamamos o console log para exibir o resultado do objeto Date, o retorno deverá ser o ano, mes, dia e o horário atual da execução do código. */
console.log("Data de agora: ", agora);

/* Criamos uma nova instância de Date passando uma string no formato ISO 8601. O valor que deverá ser retornado no terminal. */
const nascimento = new Date("1996-10-11:20:30.000z");
console.log("Data de nascimento: ", nascimento);
/* Aqui neste console log, usamos uma função toLocaleDateString, para receber qual a localização da data, passando a lingua e o local, dessa forma a data será formatada de acordo com o local informado. Ex. Brasil, Estados Unidos, etc...*/
console.log("Data formatada (BR): ", nascimento.toLocaleDateString("pt-BR"));
console.log("Data formatada (US): ", nascimento.toLocaleDateString("en-US"));
