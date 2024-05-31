//Creamos la variable calificaciones las cuales les pasamos las calificaciones
const calificaciones = [100, 90, 100, 80, 90, 80, 65, 28, 60, 45, 72, 55, 88, 40, 68, 75, 58, 95, 62, 50, 82, 35]


//creamos una variable calificaciones pasanates en la cual  de decimos que a calificaciones le haga un filatrado de mayor o igual que 70 
const calificacionesPasantes  = calificaciones.filter(calificacion => calificacion >= 70)


//Creamos una variable para el promedio en la cual  le decimos que a calificaciones pasantes las sume toda y despues la divida por la longitud del array y así nos de el promedio 
const promedioDeCalificaciones = calificacionesPasantes.reduce((sum, calificacion) => sum + calificacion, 0) / calificacionesPasantes.length;


//Como el promedio nos muestra decumales pasamos un removedor de decimales 
const promedioSinDecimales = Math.floor(promedioDeCalificaciones);


///Imprimimos  las 3 variables principales
console.log(calificaciones)
console.log(calificacionesPasantes)
console.log(promedioSinDecimales)