/**
 * crear array de longitud N, y que sus elementos
 * sean numeros de 1 hasta N.
 */
let longitud = 10; 

function crearArray(n) {
    let array = []; // Inicializa un nuevo array vacío

    for (let i = 1; i <= n; i++) {
        array.push(i); // Agrega el número i al array
    }

    return array; // Devuelve el nuevo array
}
let nuevoArray = crearArray(longitud);  // Llama a la función con la longitud deseada
console.log(nuevoArray); // Imprime el nuevo array