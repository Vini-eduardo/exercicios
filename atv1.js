//Vinícius Eduardo Correia
/*Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.*/
console.clear();
var tecado = require("prompt-sync")();
var soma = 0;
for (var x = 0; x < 50; x++) {
    soma = soma + x;
}
console.log("A soma de 0 a 50 \u00E9 ".concat(soma));
