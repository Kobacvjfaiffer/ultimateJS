/**
 * crear un algoritmo que devuelva la cantidad de numeros positivos de un array
 */
let array = [2, 5, 7, 15, -5, -100, 55];
function getPositives(arr) {
    let count = 0; // Inicializa el contador de números positivos

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++; // Incrementa el contador si el número es positivo
    }

    return count; // Devuelve la cantidad de números positivos
}
let cantidadPositivos = getPositives(array); // Llama a la función con el array
console.log(cantidadPositivos); // Imprime la cantidad de números positivos
