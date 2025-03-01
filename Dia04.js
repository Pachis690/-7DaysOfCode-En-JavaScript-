/*
Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

*/


let numJugador = 0
let numComputadora = Math.floor(Math.random() * 5) + 1
let intentos = 0

const MAX_INTENTOS = 3


//para funciones de prueba se hace ver el numero
console.log(numComputadora);

alert("Hola y bienvenido a mi juego :)");
alert("El juego consiste en adivinar el número que estoy pensando (1 a 5)");
alert("Tienes 3 intentos. Listo?");


function jugar() {
    while (intentos < MAX_INTENTOS) {
      let numJugador = parseInt(prompt("Ingresa tu número (1-5):")); 
  

    /* ESTA VERSION NO CUENTA CON 3 INTENTOS 
    if(numJugador == numComputadora){
        alert("pensanding...")
        alert("pensanding...")
        alert("calculando...")
        alert("Bien hecho!")
    }

    else{
        alert("pensanding...")
        alert("pensanding...")
        alert("pensanding...")
        alert("calculando...")
        alert ("Parece que no es el mismo :/")
        alert("mi numero era " + numComputadora)
    }
    */





    if (numJugador === numComputadora) {
      alert("Alaaa! ¡Adivinaste! :D");
      return; // Termina la función si acierta
    }
    
    else {
      intentos++;
      alert("Mal! Intentos restantes: " + (MAX_INTENTOS - intentos));
      
      if (intentos === MAX_INTENTOS) {
        alert("mmm... El número era: " + numComputadora+ ":(");
      }
    }
  }
}
jugar();