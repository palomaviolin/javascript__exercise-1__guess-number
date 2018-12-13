'use strict';

let feedbackElem = document.body.querySelector('.feedback');
let counterElem = document.body.querySelector('#counter');
let counter = 0;
let randomNumber;
let testButton;

// Toda la lógica de inicialización en una única función que LUEGO HAY QUE LLAMAR
function init() {
    counterElem.innerText = counter;
    randomNumber = getRandomNumber(100);

    // Imprimimos el número aleatorio generado en consola
    console.log(`El número aleatorio es: ${randomNumber}`);

    // Asociamos al botón la función que se encarga de comprobar el número del usuario
    testButton = document.body.querySelector('#test-button');
    testButton.addEventListener('click', testGuess);
}

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function incrementCounter() {
    counter += 1;
    counterElem.innerText = counter;
}

function testGuess() {
    // Obtenemos el número introducido por el usuario
    let inputElem = document.body.querySelector('#number-input');
    // Al ser el input de tipo number, no es necesario hacer parseInt. El || 0 es por si se pulsa el botón sin haber escrito nada
    let userNumber = inputElem.value || 0;  // La propiedad 'value' de un input contiene el valor introducido por el usuario

    // Comparamos el número del jugador con el generado
    if (userNumber > randomNumber) {
        feedbackElem.innerText = 'Demasiado alto'
    } else if (userNumber < randomNumber) {
        feedbackElem.innerText = 'Demasiado bajo'
    } else {
        feedbackElem.innerText = '¡HAS GANADO, CAMPEONA!'
    }
    incrementCounter();  // Importante: independientemente del caso, aumentar el contador de intentos
}

// LLAMAMOS A LA FUNCIÓN DE INICIALIZACIÓN
init();