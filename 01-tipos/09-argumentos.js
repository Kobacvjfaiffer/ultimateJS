function suma(a, b) {
    console.log(arguments);//muestra los argumentos en un array
    return a +b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);