// short-circuit

//falso
//false
//0
//''
//null
//undefined
//NaN
let nombre = 'Pantera feliz';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('soy funcion 1');
    return true;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();