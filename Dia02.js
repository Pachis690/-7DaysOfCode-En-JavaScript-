/*Debe pedir al usuario responder 3 preguntas:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando? */


//Ejecutar en la consola de un sitio web (ctrl + shift + i)


let nombre = "test "
let edad = 99
let leguaProg = "javascript"

nombre = prompt("Hola! cual es tu nombre?");
 alert("Bienvenido " + nombre + "!");

 
edad = prompt("Dime, cuantos años tienes?");
alert("Entonces tienes "+ edad + "!");

leguaProg = prompt("Y que lenguaje de programación estás estudiando?");

alert("Wow! estudias " + leguaProg + "!");

alert("Hola " + nombre  + " tienes " + edad +  " años y ya estás aprendiendo " + leguaProg + "!");


alert(";)");



/*
Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:

1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

//Ejecutar en la consola de un sitio web (ctrl + shift + i)

let lenguajeProg = "hola"
let respuesta = 1

alert("Bienvenido!");

lenguajeProg = prompt(" Que lenguaje de programación estas aprendiendo?");

respuesta = prompt("¿Te gusta estudiar "+ lenguajeProg + "? Responde con el número 1 para SÍ o 2 para NO");

if (respuesta == 1) {

    // da la respuesta positiva
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");


}


if (respuesta == 2) {

         // da la respuesta negativa
         alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");

     }
