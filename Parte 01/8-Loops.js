console.log(`Trabalhando com Loopings`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);
console.log("\n Destinos possíveis: \n");
console.log(listaDeDestinos);

const idadeComprador = 18;
let acompanhantePresente = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

const podeComprar = idadeComprador >= 18 || acompanhantePresente == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        break;
    }
    contador += 1
}
console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log ("Desculpe, tivemos um erro");
}

for(let cont = 0 ; cont < 3; cont++)
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        break;
    }
}