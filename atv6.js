//Vinícius Eduardo Correia
/*Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR*/
console.clear();
for (var x = 1000; x <= 2000; x++) {
    if (x % 11 == 2) {
        console.log("Os n\u00FAmeros divididos por onzem que obtem resto 2 s\u00E3o: ".concat(x));
    }
}
