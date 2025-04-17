function cualEsMayor(a, b) {
   /* if (a > b) {
        return a;
    } else {
        return b;
    } */
    return a > b ? a : b; // operador ternario
}
let mayor = cualEsMayor(10, 5);
console.log(mayor); // 10