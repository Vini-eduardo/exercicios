//Vinícius Eduardo Correia
/*Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/
var teclado = require("prompt-sync")();
console.clear();
var entrada = new Array(10);
for (var x = 0; x < 10; x++) {
    entrada[x] = parseInt(teclado("Digite um n\u00FAmero: "));
}
var saida = new Array(10);
for (var x = 0; x < 10; x++) {
    saida[x] = entrada[9 - x];
}
for (var x = 0; x < 10; x++) {
    console.log("Posi\u00E7\u00E3o ".concat(x, ": ").concat(saida[x]));
}
