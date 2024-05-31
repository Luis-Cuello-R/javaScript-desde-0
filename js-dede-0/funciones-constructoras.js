/* Funciones constructoras
Las funciones constructoras son una forma especial de funciones en JavaScript que se usan para crear objetos. Estas funciones permiten definir una "plantilla" para los objetos que se van a crear.
Vamos a crear un ejemplo sencillo. Supón que quieres crear objetos que representen a personas. Cada persona tiene un nombre y una edad, y puede saludar. Podrías usar una función constructora para definir cómo se crean estos objetos de persona: */


function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log('¡Hola! Mi nombre es ' + this.nombre);
  }
}
/* En este ejemplo, Persona es una función constructora. Cuando se llama a esta función con la palabra clave new, crea un nuevo objeto. Las propiedades y métodos de ese objeto se definen dentro de la función constructora usando this.
Para crear un nuevo objeto persona, usaríamos la palabra clave new seguida del nombre de la función constructora y los argumentos que queremos pasar: */


let juan1 = new Persona('Juan', 22);
juan.saludar(); // Imprime: ¡Hola! Mi nombre es Juan

let ana = new Persona('Ana', 28);
ana.saludar(); // Imprime: ¡Hola! Mi nombre es Ana
/* Aquí, juan y ana son ambos objetos creados usando la función constructora Persona. Tienen las propiedades nombre y edad, y el método saludar, como se definió en la función constructora.
Las funciones constructoras son útiles porque permiten definir una vez la estructura de un objeto y luego crear tantos objetos como se desee con esa estructura. Esto puede hacer que tu código sea más claro y fácil de mantener.
Aquí tienes otro ejemplo de una función constructora que crea objetos que representan coches: */


function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.arrancar = function() {
    console.log(this.marca + ' ' + this.modelo + ' ha arrancado.');
  }
}

let miCoche = new Coche('Toyota', 'Corolla', 2005);
miCoche.arrancar(); // Imprime: Toyota Corolla ha arrancado.

let tuCoche = new Coche('Honda', 'Civic', 2010);
tuCoche.arrancar(); // Imprime: Honda Civic ha arrancado.
/* Aquí, Coche es una función constructora que crea objetos con propiedades marca, modelo y año, y un método arrancar. miCoche y tuCoche son objetos creados usando esta función constructora.



Imgur

Funciones constructoras con arrow functions ⇒

Las funciones constructoras con arrow functions se refieren al uso de las funciones de flecha, una característica de ES6, en la creación de objetos en JavaScript. Sin embargo, es importante notar que las funciones de flecha no son las más adecuadas para este propósito debido a su comportamiento con el valor 'this'.
En JavaScript, las funciones de flecha no tienen su propio this. En su lugar, this en una función de flecha proviene del contexto que lo rodea, a este comportamiento se le llama enlace léxico.
Este comportamiento de las funciones de flecha con this puede volverse problemático cuando intentamos usarlas como funciones constructoras. En las funciones constructoras, this usualmente se refiere al nuevo objeto que se está creando. Sin embargo, dado que las funciones de flecha no tienen su propio this, no pueden ser utilizadas para construir nuevos objetos.
Aquí un ejemplo que muestra el problema:
 */

let Persona = (nombre, edad) => {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log('¡Hola! Mi nombre es ' + this.nombre);
  }
}

let juan = new Persona('Juan', 22); // TypeError: Persona is not a constructor
/* En este caso, el intento de usar la función de flecha Persona como una función constructora arroja un TypeError. Esto se debe a que this en Persona no se refiere al nuevo objeto que se está creando, como lo haría en una función constructora regular, por lo que JavaScript no reconoce Persona como un constructor.
Por esta razón, si necesitas usar funciones constructoras para crear nuevos objetos, es mejor usar funciones regulares en lugar de funciones de flecha. */