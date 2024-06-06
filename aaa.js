console.clear();
var teclado = require("Prompt-sync")();
var numeros = new Array();
for (var x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, " do Array: ")));
}
for (var z = 0; z <= 9; z++) {
    for (var y = 0; y <= 10; y++) {
        if (numeros[z] < numeros[z]) {
            var crescente = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = crescente;
        }
    }
}
console.log("O Array em ordem crescente ".concat(numeros));
