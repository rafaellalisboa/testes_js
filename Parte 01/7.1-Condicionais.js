console.log(`Trabalhando com condicionais`);

console.log("Destinos possíveis: \n")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);
console.log(listaDeDestinos);

const idadeComprador = 12;
const acompanhantePresente = true
const temPassagemComprada = true

if (idadeComprador >= 18 || acompanhantePresente == true) {
    console.log ("Compra liberada, boa viajem \n")
    listaDeDestinos.splice(2,1); 
} else {
    console.log("Não é maior de idade, venda impossibilitada")
}
console.log(listaDeDestinos);

console.log("Embarque: \n")
if (idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viajem");
} else {
    console.log("Embarque impossibilitado, dirija-se ao guiche")
}