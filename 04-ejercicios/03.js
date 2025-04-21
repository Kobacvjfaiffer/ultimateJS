/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */
function getbyIdx(array, idx) {
    if (idx < 0 || idx >= array.length) {
        return "Elemento no existe"; // o puedes devolver null, undefined, false, etc.
    } else {
        return array[idx]; // Devuelve el elemento del array en la posición idx
    }
}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado); // Ahora devuelve 2 (no true)