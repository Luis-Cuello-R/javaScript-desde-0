// Función constructora para personas
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;    // Propiedad para el nombre
    this.apellido = apellido;  // Propiedad para el apellido
    this.edad = edad;   // Propiedad para la edad
}

// Crear instancias de la Persona usando el operador new
const persona1 = new Persona('juan', 'perez', 25);
console.log(persona1);

const persona2 = new Persona('juana', 'suarez', 18);
console.log(persona2);

/* 
Explicación:

Función Constructora (Persona):
La función Persona toma tres parámetros (nombre, apellido, edad).
Dentro de la función, this se refiere al nuevo objeto que se está creando.
Se asignan propiedades (nombre, apellido, edad) al objeto usando this.
Creación de instancias:
const persona1 = new Persona('juan', 'perez', 25);: Se crea una nueva instancia de Persona con los valores proporcionados. persona1 es un objeto con las propiedades especificadas.
const persona2 = new Persona('juana', 'suarez', 18);: Se crea otra instancia de Persona con valores diferentes.
Impresión en consola:
console.log(persona1); y console.log(persona2); se utilizan para imprimir en la consola las instancias de las personas creadas.
Entonces, este código es un ejemplo de cómo usar funciones constructoras en JavaScript para crear objetos del tipo Persona con propiedades específicas (nombre, apellido, edad). Cada instancia creada con new Persona(...) es un objeto independiente con sus propias propiedades.
*/

// Función constructora para personas
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
};

// Crear una instancia de la Persona
const persona3 = new Persona('Juan', 'Pérez', 30);

// Llamar al método agregado al prototipo
persona1.saludar();

/* 
En este ejemplo, la función saludar se agrega al prototipo de Persona. Todas las instancias creadas con new Persona tendrán acceso a este método. Esto permite agregar funciones sin tener que modificar directamente la función constructora. Puedes agregar tantos métodos como necesites al prototipo, y todas las instancias compartirán esas funciones.

Este enfoque es útil cuando deseas extender las capacidades de todas las instancias de una función constructora sin tener que agregarlas directamente en cada instancia o en la propia función constructora.
*/