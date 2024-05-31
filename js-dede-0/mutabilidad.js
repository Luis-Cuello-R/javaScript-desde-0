// tipo de dato primitivo - inmutable

let numero = 23;
numero = numero + 10;
console.log(nuemro);

let esVerdadero=true
esVerdadero = false
console.log(esVerdadero)

// tipos de datos complejos - mutable

let usuario = {nombre: 'pepito', edad: 15}
usuario.edad = 20;
console.log(usuario)

let frutas = ['mazana', 'pera']
frutas[0] = 'sandia';
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = "nuevo nombre"
}

let persona = {nombre: "antonio"};
cambiarNombre(persona)
console.log.mi(persona)