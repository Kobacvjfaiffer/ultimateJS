function Usuario(nombre,) {
  this.nombre = nombre;
}

console.log(Usuario.name); 
console.log(Usuario.length); // 1

const U = Usuario
let user = new U("Kobac");
console.log(user);

function of(Fn, args) {
  return new Fn(args);
}
let user2 = of(Usuario, "Tato");
console.log(user2);

function returned() {
  return function() {
    console.log("Soy una función retornada");
  };
}
let saludo = returned();
saludo(); // Soy una función retornada