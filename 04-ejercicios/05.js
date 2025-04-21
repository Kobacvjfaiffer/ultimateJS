/**
 * Crear un algoritmo que devuelva el numero menor y mayor de una array
 */
function getMinMax(arr) {
    if (arr.length === 0) return null; // Manejo de array vacío

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]; // Actualiza el mínimo
        if (arr[i] > max) max = arr[i]; // Actualiza el máximo
    }

    return { min, max };
}

let array = [2, 5, 7, 15, -5, -100, 55];
let numeros = getMinMax(array);
console.log(numeros); // { min: -100, max: 55 }