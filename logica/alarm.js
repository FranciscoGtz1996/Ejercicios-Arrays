/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".

1. Ingresar los segundos necesarios para que se muestre la alarma 
2. Ingresar el mensaje que quiere que se muestre cuando hayan pasado los segundos
3. Hacemos la conversión de la cadena de segundos a entero ingresada por el usuario, para poder hacer operaciones mas adelante
4. Usamos la función setTimeout para poder mostrar el mensjae que ingreso una vez que hayan pasado los segundos
*/

//Le mostramos al usuario una alerta de bienvenida
alert("Hola, ingresa los segundos que necesitas y el mensaje que mostraré al pasar el tiempo");
//Le pedimos al usuario que ingrese los segundos que necesite hasta que se muestre su mensaje
const delay = prompt("Ingresa los segundos que necesitas: ");
//Convertimos la cadena ingresada a un entero para después hacer la operación a segundos
let delayNumber = parseInt(delay);
//Le pedimos al usuario que ingrese el mensaje que quiere se muestre
const message = prompt("Ingresa el mensaje que quieres que te recuerde: ");
//Hacemos la conversión del numero que ingresó multiplicando por 1000 para que sean los segundos en tiempo real
delayNumber = delayNumber*1000;
//Mostramos en consola el tiempo en el que mostrará el mensaje
console.log("De acuerdo, te recordare en: " + (delayNumber/1000) + " segundos");

//Usamos la función setTimeout para que ejecute la función una vez que tenemos los parámetros del usuario
setTimeout(() => {
 // Mostranos una alerta con el mensaje que ingresó el usuario una vez que pasaron los segundos establecidos
 alert(message);
}, delayNumber);