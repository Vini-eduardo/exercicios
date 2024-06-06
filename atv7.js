//Vinícius Eduardo Correia
/*Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.*/
console.clear();
var teclado = require("prompt-sync")();
var y = 1;
var z = 1;
var maximo = -1;
maximo = maximo + parseInt(teclado("Digite um n\u00FAmero: "));
for (var x = 0; x <= maximo; x++) {
    y = y * y;
    y++;
    console.log(y);
}
