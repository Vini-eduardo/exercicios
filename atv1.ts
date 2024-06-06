//Vinícius Eduardo Correia
/*Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.*/

console.clear();
const tecado = require(`prompt-sync`)();
let soma = 0

for (let x = 0; x < 50; x++) {
    soma = soma + x;
}
console.log(`A soma de 0 a 50 é ${soma}`);
