'use strict';

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
console.log('> ' + getRandomNumber(100));


// contador de intentos:
let button = document.getElementById("btn"),
  count = 0;
button.onclick = function() {
  count += 1;
  let counterElement = document.querySelector('#counter');
  counterElement.innerHTML = count;
  counter.innerHTML = "Number of attempts: " + count;
};

/*

// Para loguear el botón prueba (que aumente el número de veces que le doy al botón en la consola).

const button = document.body.querySelector('#btn');

function method(event) {
    console.log(event);
}

button.addEventListener('click', method);


//

let number = '';

if ( number > 50 ){
  console.log('Demasiado alto'); 
} else if ( number <= 50) {
  console.log('Demasiado bajo'); 
} else if ( number === NÚMERO RANDOM ) {
  console.log('¡HAS GANADO, CAMPEONA!');
} else {
  console.log('Sigue intentándolo'); 

*/