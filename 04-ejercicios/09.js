/**
 * Crear algoritmo que debuelva un array en base a pares
 *  
 */
let pairs = [
    [1, {nombre: "Juan"}],
    [2, {nombre: "Ana"}],
    [3, {nombre: "Pedro"}],
];
let array = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Pedro" }
];
function toCollection(array) {
    let colletion = []; // Inicializa un nuevo array vacío

    for (idx in array) {
        let elemento = array[idx];  // Toma el par actual del array
        colletion[idx] = elemento[1];
        colletion[idx].id = elemento[0];
        
        
    }

    return colletion; // Devuelve el nuevo array de objetos
}
let nuevoArray = toCollection(pairs); 
console.log(nuevoArray);
   