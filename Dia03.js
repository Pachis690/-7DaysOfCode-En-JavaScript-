/*
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o
desarrollarse para convertirse en Fullstack.Debes mostrar en pantalla un mensaje específico para cada elección.
 
Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, 
una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: 

"¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión.
Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/

let frondEnd = 0
let backEnd = 0
let eleccion = 0
let frameworks = 0

alert("Hola!")
alert("Listo para otro juego?")
alert("Elige las opciones que más te gusten y sigue la historia!")
alert("Empezemos!")

eleccion = prompt("Quieres seguir hacia el área de Front-End [1] o seguir hacia el área de Back-End [2] ?")

if(eleccion == 1){
    alert("Elejiste Front End!")
    frameworks = prompt("Quiere aprender React[1] o aprender Vue[2]?")
    if( frameworks == 1){
        alert("Elejiste React!")
    }
    else if(frameworks == 2){
        alert(" Alejiste Vue!")
    }
    else{
        alert("Numero no admitido!! ingrese un numero valido!!!")
    }
}
else{
    alert("Elejiste Back End!")
    frameworks = prompt("Quiere aprender  C#[1] o Java[2]")
    if(frameworks == 1){
        alert("Elejiste C#!")
    }
    else if (frameworks == 2){
        alert("Elejiste Java!!!")
    }
    else{
        alert("Numero no admitido!! ingrese un numero valido!!!")
    }
}