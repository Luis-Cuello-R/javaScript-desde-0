function imprimirInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Profesión: ${this.profesion}`);
  }
  
  // Objeto 1
  const persona1 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
  };
  
  // Objeto 2
  const persona2 = {
    nombre: "Ana",
    edad: 25,
    profesion: "Doctora",
  };
  
  // Utilizar la función imprimirInformacion con diferentes objetos
  imprimirInformacion.call(persona1);
  console.log("--------------------");
  imprimirInformacion.call(persona2);
  
//   ```un ejemplo más práctico del uso del método `call` para cambiar el contexto de una función y utilizar propiedades del objeto proporcionado`