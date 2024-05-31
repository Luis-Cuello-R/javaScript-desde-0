class Persona {
    constructor (nombre, apellido, relacion, consecuencia) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.relacion = relacion;
      this.consecuencia = consecuencia
    }
    saludar () {
      console.log (`Hola, me llamo ${this.nombre} ${this.apellido}. Tú ${this.relacion}, prepárate a ${this.consecuencia}.`)
    }
  }
  
  const persona1 = new Persona('Íñigo', 'Montoya', 'mataste a mi padre', 'morir')
  
  persona1.saludar()