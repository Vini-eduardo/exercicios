//Vinícius Eduardo Correia
/*Exibir os números pares de 0 a 60, fazer uso do laço
de repetição for.*/

console.clear
const tecla = require(`prompt-sync`)();

for (let par = 0; par <= 60; par++) {
    if (par % 2 == 0) {
        console.log(`É um número par: ${par}`);
    }
}