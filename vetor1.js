//Vinícius Eduardo Correia
/*Faça dois vetores, um que contenha cada dia da semana, o outro que contenha sete atividades/hobby.
Crie uma frase, para cada dia da semana usado todos os índices dos dois vetores.*/
console.clear();
var array1 = ["segunda-feira", "ter\u00E7a-feira", "quarta-feira", "quinta feira", "sexta-feira", "s\u00E1bado", "domingo"];
var array2 = ["jogar", "estudar", "ouvir m\u00FAsica", "desenhar", "assistir filme", "tocar guitarra", "caminhar"];
console.log("Na ".concat(array1[0], ", eu gosto de ").concat(array2[0], ". Na ").concat(array1[1], ", eu tenho que ").concat(array2[1], ". \nNa ").concat(array1[2], ", eu gosto de ").concat(array2[2], ". Na ").concat(array1[3], ", eu gosto de ").concat(array2[3], ". Na ").concat(array1[4], ",\neu gosto de ").concat(array2[4], ". No ").concat(array1[5], ", eu gosto de ").concat(array2[5], ". No ").concat(array1[6], ", eu gosto de ").concat(array2[6], "."));
