//Vinícius Eduardo Correia
/*Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/

const teclado = require(`prompt-sync`)();
console.clear();

let entrada: number[] = new Array(10);

for (let x = 0; x < 10; x++) {
    entrada[x] = parseInt(teclado(`Digite um número: `));
}

let saida: number[] = new Array(10);

for (let x = 0; x < 10; x++) {
    saida[x] = entrada[9 - x];
}

for (let x = 0; x < 10; x++) {
    console.log(`Posição ${x}: ${saida[x]}`);
}