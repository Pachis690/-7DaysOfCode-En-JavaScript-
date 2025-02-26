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