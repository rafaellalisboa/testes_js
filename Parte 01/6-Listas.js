console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log (salvador, saoPaulo, rioDeJaneiro)

console.log("Destinos possíveis:")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

listaDeDestinos.push(`Curitiba`)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //contagem começa em 0
console.log(listaDeDestinos);
//o 'splice' tem que vir antes do console.log se não ele não exibe a remoção

console.log(listaDeDestinos[1])


