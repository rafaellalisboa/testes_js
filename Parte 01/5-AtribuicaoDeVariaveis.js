console.log("Trabalhando com atribuição de variáveis");

let nome = "Rafaella"
const sobrenome = "Lisboa"

console.log(nome + " " + sobrenome)
console.log(nome, sobrenome)

console.log(`Meu nome é ${nome} ${sobrenome}`); 
//uso de crase para interposse de variáveis e de sifrão + chave para declarar a variável dentro de uma string

nome = nome + sobrenome; //sobreescrevendo, somente possivel por ser 'let' e não const
console.log(nome);

const primeiroNome = "Rafaella";
const nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);


let idade = 23
idade = idade + 1
console.log(idade)
