function random(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  let contador = 0;
  const marcas = ['Audi','Bentley','BMW','Cadillac','Caterham','Chevrolet','Dacia','Ferrari','Ford', 'Honda','Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'KTM', 'Lamborghini', 'Lancia', 'Land Rover','Maserati', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Peugeot', 'Porsche', 'Rolls-Royce', 'Suzuki', 'Tesla', 'Toyota'];
  
  let palabraSecreta = random(marcas);
  let primeraLetraSecreta = palabraSecreta.charAt(0);
  
  console.log(
    "La primera letra de la palabra secreta es: " + primeraLetraSecreta
  );
  
  do {   
      const palabraJugador = prompt("Adivina la marca de coche secreta");
  
          console.log(`Esta es la palabra con la que juegas: ${palabraJugador}`);
          if (palabraJugador === palabraSecreta) {
          console.log(`La marca "${palabraJugador}" ${ marcas.includes(palabraJugador) ? "está" : "no está" } dentro de la lista`
          );
          console.log("¡Ah, felicidades, adivinaste!");
          contador = 0;
          alert("🎇🎆🎆🎇🎆Quieres jugar de nuevo?")
  
          if (contador === 0) {
              palabraSecreta = random(marcas);
              primeraLetraSecreta = palabraSecreta.charAt(0);
              console.log(
              "La primera letra de la nueva palabra secreta es: " +
                  primeraLetraSecreta
              );
          }
          } else {
          console.log("La marca no coincide, intenta de nuevo");
          contador++;
          }
  
      console.log(contador);
      } while (contador < 3);