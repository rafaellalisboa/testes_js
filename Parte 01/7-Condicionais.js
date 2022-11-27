console.log(`Trabalhando com condicionais`);

console.log("Destinos possíveis:")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);
console.log(listaDeDestinos);

const idadeComprador = 12;
const acompanhantePresente = true

if (idadeComprador >= 18) {
    console.log ("Comprador maior de idade")
    listaDeDestinos.splice(1,1); 
} else {
        if (acompanhantePresente == true) { 
            console.log ("Comprador menor de idade está acompanhado de responsável legal")
            listaDeDestinos.splice(1,1); 
        } else {
            console.log("Não é maior de idade, venda impossibilitada")
             }
        }

console.log(listaDeDestinos);