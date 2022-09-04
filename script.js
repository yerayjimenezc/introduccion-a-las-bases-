// En este ejercicio practicarás las estructuras de control, para ello deberás crear:

// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
// Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

let numeroIf = 0
if (numeroIf > 0) {
    console.log('numeroIf es positivo')
} else if (numeroIf < 0) {
    console.log('numeroIf es negativo')
} else {
    console.log('numeroIf es 0')
}


// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

// Incrementar el valor de la variable en uno cada vez que se ejecute.

// Mostrarlo por pantalla cada vez que se ejecute.

let numeroWhile = -3
while (numeroWhile < 0) {
    numeroWhile++
    console.log(numeroWhile)
}

// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

let numeroDoWhile = 2
do {
    numeroDoWhile++
} while (numeroDoWhile < 3)

// Par

// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

let numeroFor = 0
for (let i = 0; i <= 3; i++) {
    numeroFor++
    console.log(numeroFor)
}

// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.

let estacion = 'VERANO'

switch (estacion) {
    case 'VERANO':
        console.log('estamos en verano')
        break
    case 'INVIERNO':
        console.log('estamos en invierno')
        break
    default:
        console.log(`estamos en ${estacion}`)
}
