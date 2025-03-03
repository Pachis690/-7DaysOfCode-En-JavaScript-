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

let frontEnd = 0;
let backEnd = 0;
let eleccion = 0;
let frameworks = 0;

alert("Hola!");
alert("Listo para otro juego?");
alert("Elige las opciones que más te gusten y sigue la historia!");
alert("Empezemos!");

eleccion = prompt("Quieres seguir hacia el área de Front-End [1] o seguir hacia el área de Back-End [2] ?");

if (eleccion == 1) {
    frontEnd = 1;
    console.log(frontEnd);
} else if (eleccion == 2) {
    backEnd = 1;
    console.log(backEnd);
} else {
    alert("Ingrese un número válido!!! >:|");
}

if (eleccion == 1) {
    alert("Elegiste Front End!");
    frameworks = prompt("¿Quieres aprender React[1] o aprender Vue[2]?");
    if (frameworks == 1) {
        alert("Elegiste React!");
    } else if (frameworks == 2) {
        alert("Elegiste Vue!");
    } else {
        alert("Número no admitido!! Ingrese un número válido!!!");
    }
} else if (eleccion == 2) {
    alert("Elegiste Back End!");
    frameworks = prompt("¿Quieres aprender C#[1] o Java[2]?");
    if (frameworks == 1) {
        alert("Elegiste C#!");
    } else if (frameworks == 2) {
        alert("Elegiste Java!!!");
    } else {
        alert("Número no admitido!! Ingrese un número válido!!!");
    }
}

alert("Buenas respuestas!");

if (frontEnd > backEnd) {
    let especializacion = prompt("Prefieres seguir especializándote en FrontEnd [1] o desarrollarte para convertirte en Fullstack [2]?");
    if (especializacion == 1) {
        alert("¡Genial! Sigue profundizando en FrontEnd.");
    } else if (especializacion == 2) {
        alert("¡Excelente! Convertirse en Fullstack abre muchas oportunidades.");
    } else {
        alert("Opción no válida, pero sigue aprendiendo!");
    }
} else if (backEnd > frontEnd) {
    let especializacion = prompt("Prefieres seguir especializándote en BackEnd [1] o desarrollarte para convertirte en Fullstack [2]?");
    if (especializacion == 1) {
        alert("¡Genial! Sigue profundizando en BackEnd.");
    } else if (especializacion == 2) {
        alert("¡Excelente! Convertirse en Fullstack abre muchas oportunidades.");
    } else {
        alert("Opción no válida, pero sigue aprendiendo!");
    }
}

// Bucle para preguntar por más tecnologías
do {
    let tecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    alert("¡Genial elección! Aprender " + tecnologia + " puede ser muy útil.");
} while (confirm("¿Quieres agregar otra tecnología?") === true);
