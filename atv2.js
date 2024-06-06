//Vinícius Eduardo Correia
/*Exibir os números pares de 0 a 60, fazer uso do laço
de repetição for. */
console.clear;
var tecla = require("prompt-sync")();
for (var par = 0; par <= 60; par++) {
    if (par % 2 == 0) {
        console.log("\u00C9 um n\u00FAmero par: ".concat(par));
    }
}
