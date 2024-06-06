//Vinícius Eduardo Correia
/*Faça um programa que dê entrada com 10 números,
armazene em um vetor, e verifique qual é o maior
número e mostre no console.*/

console.clear();
const teclado = require(`prompt-sync`)();
let maior = 0
let vetorNumeroMaior: number[] = new Array(10);

for (let x = 1; x <= 10; x++) {
    vetorNumeroMaior[x] = parseInt(teclado(`Digite os números: `));
    if (vetorNumeroMaior[x] > maior) {
        maior = vetorNumeroMaior[x];
    }
}
console.log(maior);