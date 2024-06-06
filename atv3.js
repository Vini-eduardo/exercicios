//Vinícius Eduardo Correia
/*Faça um programa que dê entrada com 10 números,
armazene em um vetor, e verifique qual é o maior
número e mostre no console.*/
console.clear();
var teclado = require("prompt-sync")();
var maior = 0;
var vetorNumeroMaior = new Array(10);
for (var x = 1; x <= 10; x++) {
    vetorNumeroMaior[x] = parseInt(teclado("Digite os n\u00FAmeros: "));
    if (vetorNumeroMaior[x] > maior) {
        maior = vetorNumeroMaior[x];
    }
}
console.log(maior);
