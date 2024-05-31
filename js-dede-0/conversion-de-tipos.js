const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n***************************QUIZ***************************\n')
console.log('Teniendo en cuenta el siguiente fragmento de código, determine la respuesta correcta según el tipo de dato de las variables en mención:')

console.log("\n const numero = '596'\n const numeroConvertido = parseInt(numero)")

const data = [
    {opcion: 'A', respuesta: 'string / number'},
    {opcion: 'B', respuesta: 'string / string'},
    {opcion: 'C', respuesta: 'number / string'}
]

console.table(data)

const numero = '596'
const numeroConvertido = parseInt(numero)

rl.question('Ingrese la respuesta correcta (A, B o C):  ', function(response) {
    if (response.trim().toUpperCase() == "A"){
        console.log("\nRespuesta Correcta 🥳")
        console.log(`El tipo de dato para la variable numero es: ${typeof numero} y para la variable numeroConvertido es: ${typeof numeroConvertido}`)
    }else{
        console.log("\nRespuesta incorrecta 😖, revisa los datos y vuelve a intentarlo.")
    }
    rl.close();
});