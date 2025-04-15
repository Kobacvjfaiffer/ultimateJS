 let user = {
    name: 'Juan',
    age: 25,
    id: 1,
 };
 
 for (let prop in user) {
    console.log(prop, user[prop]); // name, age, id
 }

 let animales = ['perro', 'gato', 'loro', 'raton', 'pez'];
 for (let indice in animales) {
    console.log(indice, animales[indice]); // 0, 1, 2, 3, 4
 }