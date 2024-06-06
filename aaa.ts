console.clear();
let teclado = require (`Prompt-sync`)();
let numeros = new Array();

for (let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));
}

for (let z =0; z <= 9; z++){
    for (let y = 0; y <= 10; y++){
        if (numeros[z] < numeros[z]){
            let crescente = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = crescente;
        }
    }
}

console.log(`O Array em ordem crescente ${numeros}`);