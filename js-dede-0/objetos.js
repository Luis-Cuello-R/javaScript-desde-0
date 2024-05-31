/* 
Objetos en JavaScript
En JavaScript, los objetos son una estructura de datos clave-valor, lo que significa que almacenan datos en pares clave-valor. Cada valor en un objeto puede ser de cualquier tipo de dato, y las claves son cadenas o símbolos. Los objetos en JavaScript son flexibles y poderosos, y se utilizan para representar datos estructurados y organizar funciones.

Anatomía de un Objeto:
Propiedad: Par clave-valor que define un dato del objeto.
Clave: Nombre único que identifica la propiedad.
Valor: Dato asociado a la clave.
Método: Función que se puede ejecutar sobre el objeto.
Prototipo: Objeto del que hereda propiedades y métodos el objeto actual.

const persona = {
  nombre: "Ana", // Propiedad
  apellido: "Pérez", // Propiedad
  edad: 25, // Propiedad
  saludar: function() { // Método
    console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
  },
};
Cómo Acceder a Propiedades:

Puedes acceder a las propiedades de un objeto utilizando la notación de punto (objeto.propiedad) o la notación de corchetes (objeto['propiedad']).


console.log(persona.nombre); // Salida: Juan
console.log(persona['edad']); // Salida: 25
Modificar y Agregar Propiedades:

Puedes modificar el valor de una propiedad existente y agregar nuevas propiedades en cualquier momento.


persona.edad = 26; // Modificar el valor de la propiedad existente
persona.trabajo = "Desarrollador"; // Agregar una nueva propiedad
Métodos:

Los objetos también pueden contener funciones, llamadas métodos, como propiedades.


let persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function() {
    console.log("Hola, soy " + this.nombre + ".");
  }
};

persona.saludar(); // Salida: Hola, soy Juan.
Eliminar Propiedades:

Puedes eliminar una propiedad de un objeto utilizando el operador delete.


delete persona.ciudad;
*/

