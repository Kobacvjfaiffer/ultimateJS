const user = { id:1};

user.name = "Victor Fafe";
user.guardar = function() {
    console.log("Guardando", user.name);
    
}
 user.guardar();

 delete user.name;
 delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1 });
const user1 = Object.seal({ id: 1 });
user1.name = "Victor Fafe";
user1.id = 2; // No se puede modificar
console.log(user1); // { id: 1 }