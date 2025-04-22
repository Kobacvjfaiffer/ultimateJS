/**
 * crear un algoritmo que tome un array de objetos y vevuelva un array de pares
 * 
 */
let array = [
    { nombre: "Juan", id: 1 },
    { nombre: "Ana", id: 2 },
    { nombre: "Pedro", id: 3 }
];
let arrayPares = [
 [1, {id: 1, nombre: "Juan"}],
 [2, {id: 2, nombre: "Ana"}],
 [3, {id: 3, nombre: "Pedro"}]   
]; 
function toPairs(array) {
    let arrayPares = []; // Inicializa un nuevo array vacío

    for (let i = 0; i < array.length; i++) {
        let objeto = array[i]; // Toma el objeto actual del array
        let par = [objeto.id, objeto]; // Crea un par con el id y el objeto
        arrayPares.push(par); // Agrega el par al nuevo array
    }

    return arrayPares; // Devuelve el nuevo array de pares
}
let pares = toPairs(array); // Llama a la función con el array
console.log(pares); // Imprime el nuevo array de pares