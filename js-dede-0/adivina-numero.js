// Genera un número aleatorio entre 1 y 10 (ambos incluidos).
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10 + 1);
}

// Solicita al jugador que ingrese un número y maneja posibles errores de entrada.
function obtenerNumeroJugador() {
    const input = prompt("Adivina el número secreto entre 1 y 10");
    const numero = parseInt(input);
    
    if (isNaN(numero) || numero < 1 || numero > 10) {
        // Si la entrada no es un número válido, vuelve a llamar a la función.
        console.log("Por favor, ingresa un número válido entre 1 y 10.");
        return obtenerNumeroJugador();
    }
    
    return numero;
}

// Compara el número ingresado por el jugador con el número secreto generado.
function compararNumeros(numeroJugador, numeroSecreto) {
    if (numeroJugador === numeroSecreto) {
        console.log("¡Adivinaste el número secreto!");
    } else if (numeroJugador > numeroSecreto) {
        console.log("El número secreto es menor.");
    } else {
        console.log("El número secreto es mayor.");
    }
}

// Juego principal
const numeroSecreto = generarNumeroSecreto();
const numeroJugador = obtenerNumeroJugador();

// Imprime en la consola el número con el que jugó el usuario.
console.log(`Este es el número con el que jugaste: ${numeroJugador}`);

// Compara los números y muestra el resultado.
compararNumeros(numeroJugador, numeroSecreto);