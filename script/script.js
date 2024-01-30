// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtén la referencia al elemento <p> con el id "mensaje"
  let mensajeElement = document.getElementById("mensaje");

  // Cambia el contenido del elemento <p>
  mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";
});

/*
var fullName = prompt("Hola, ingresa tu nombre");
var yearOfBirth = prompt("Hola, ingresa tu año de nacimiento");
var monthOfBirth = prompt("Hola, ingresa tu mes de nacimiento");
var dayOfBirth = prompt("Hola, ingresa tu dia de nacimiento");
 
// Create a new Date object for the current date
var currentDate = new Date();
 
// Create a new Date object for the date of birth
// Subtract 1 from the month because JavaScript counts months from 0 to 11
var birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
 
// Calculate the difference in years
var age = currentDate.getFullYear() - birthDate.getFullYear();
 
// If the current month and day are before the month and day of birth, subtract 1 from the age
if (currentDate.getMonth() < birthDate.getMonth() || 
    (currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    age--;
}
 
console.log(`Hola ${fullName}, tu edad es ${age} años.`);
alert(`Hola ${fullName}, tu edad es ${age} años.`);
*/
// Class 01
/*
  // Secrets Try
  function tryDiscountPassword() {
    var numberOfTry = 0;
    let foundPassword = false;
    const secretDiscountPassword = "martin";
    while (numberOfTry < 5) {
      var discountPassword = prompt("Ingrese la contraseña para obtener el descuento");
      if (discountPassword === secretDiscountPassword) {
        foundPassword = true;
        break;
      } else {
        numberOfTry++;
      }
    }
    if(!foundPassword) {
      alert("Lo sentimos, no puedes obtener el descuento");
    } else {
    alert("Felicitaciones, obtuviste el descuento!");
    }
  }
  function moneyChange() {
    var amount = prompt("Ingrese la cantidad de pesos a cambiar");
    var rate = prompt("Ingrese el tipo de cambio");
    var result = (amount / rate).toFixed(2);
    alert(`El resultado es ${result} Hermosos y verdes dolares`);
  }
  function wordSize() {
    var word = prompt("Ingrese una palabra");
    var size = word.length;
    alert(`La palabra ${word} tiene ${size} caracteres`);
  }
*/
// Class 02
//Flow Control
/*
Solicita al usuario ingresar su calificación.

Convierte el valor ingresado a un número para asegurarte de que esté en formato numérico.

Utiliza una estructura if para evaluar la calificación:

Si la calificación es mayor o igual a 70, muestra el mensaje "Felicidades, ¡aprobaste el examen!".

Si la calificación es menor a 70, muestra el mensaje "Lo siento, no aprobaste el examen. ¡Sigue estudiando!".

Muestra el mensaje correspondiente en la consola.
*/
function grade() {
  var grade = prompt("Ingrese su calificación");
  grade = Number(grade);
  if (grade >= 70) {
    alert("Felicidades, ¡aprobaste el examen!");
    console.log("Felicidades, ¡aprobaste el examen!");
  } else {
    alert("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
    console.log("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
  }
}
function priceCalculator() {
  var price = prompt("Ingrese el precio del producto");
  var text = "El precio final es $ ";
  price >= 1000 ? alert(text + price * 0.9) : alert(text + price);

}
//Escribe un programa que reciba un número del 1 al 7 y muestre en la consola el día de la semana correspondiente utilizando la estructura switch.
function switchUse() {
  var number = parseInt(prompt("Ingrese un numero del 1 al 7"));
  calculateDayOfWeek(number)



}
function calculateDayOfWeek(number) {
  switch (number) {
    case 1:
      alert("Lunes");
      break;
    case 2:
      alert("Martes");
      break;
    case 3:
      alert("Miercoles");
      break;
    case 4:
      alert("Jueves");
      break;
    case 5:
      alert("Viernes");
      break;
    case 6:
      alert("Sabado");
      break;
    case 7:
      alert("Domingo");
      break;
    default:
      alert("No es un dia valido");
      break;
  }
}

/*
    Utiliza una estructura for para iterar desde el número 1 hasta el número 10.

    Dentro del bucle for, usa un método console.log() para mostrar cada número en la consola.
    */

function forUse() {
  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }
}

/*
Actividad Estructuras Repetitivas:  While

    Declara una variable llamada número y asígnale el valor inicial de 10.

    Utiliza una estructura while para iterar mientras el número sea mayor que 0.

    Dentro del bucle while, usa un método para mostrar el valor actual de número.

    Dentro del bucle, actualiza el valor de número restando 1 en cada iteración.
    */
function whileUse() {
  var number = 10;
  while (number > 0) {
    console.log(number);
    number--;
  }
}
/*
Actividad Estructuras Repetitivas:  Do While

Escribe un programa que solicite al usuario que ingrese una serie de números positivos y calcule la suma de todos los números ingresados. El programa debe dejar de solicitar números cuando se ingrese un número negativo y mostrar la suma total de los números positivos ingresados.
.*/

function doWhileUse() {
  var number = 0;
  var sum = 0;
  do {
    number = parseInt(prompt("Ingrese un numero positivo"));
    if (number > 0) {
      sum += number;
    }
  } while (number > 0);
  alert(`La suma de los numeros ingresados es ${sum}`);
}