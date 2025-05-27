function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {
        console.log("Recuperar clave");
    }       
}
let usuario = new Usuario();
console.log(usuario);