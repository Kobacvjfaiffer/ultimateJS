function createUser( email, name, ) {
    return {
        
        email: email,
        name: name,
        activo: true,
        recuperarContrasena: function() {
            console.log("Recuperar contraseña");
        },
    };
}

let user1 = createUser("kobac","tidisks@gmail.com");
let user2 = createUser("tato","chchchch@gmail.com");
console.log(user1, user2);