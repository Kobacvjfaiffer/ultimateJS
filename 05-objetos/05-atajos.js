let obj = {};
let obj2 = new Object();

/**
 * new Array();
 * new String();  
 * new Number();
 * new Boolean(); true, false
 */

function Usuario() {
    this.name= "Chanchito frito ";
}
let user = new Usuario();
console.log(user.constructor); // [Function: Usuario]