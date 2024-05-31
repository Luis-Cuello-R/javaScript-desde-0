// String primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

console.log(typeof stringObjeto)
const saludo='Hola. Â¿CÃ³mo estÃ¡s?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('CÃ³mo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido=saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios=' Hola Mundo '
const saludoSinEspacios=saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal='Hola Mundo'
const nuevoSaludo=saludoOriginal.replace('Mundo','ðŸ©µ')
console.log(nuevoSaludo)