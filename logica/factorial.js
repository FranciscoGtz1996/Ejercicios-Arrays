/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

1. Pedimos al usuario que ingrese un numero y convertimos la cadena a entero para poder hacer operaciones
2. Usamos una función recursiva: (Una función recursiva se llama asimisma durante su ejecución, necesitamos un basecase y los pasos de la función recursiva), en este caso nuestra basecase es la condición si el usuario ingreso el numero 0 o 1 regresará un 1, de otra  forma se ejecuta que el numero ingresado será multiplicado por el factorial del numero - 1 hasta llegar a 1
*/


 //Le mostramos al usuario una alerta de bienvenida
alert("Hola, a continuación vas a ingresar un numero y te dire su factorial");
let number = prompt("Ingresa el numero: ");
number = parseInt(number);

function factorial(number){
    //basecode de la función, si el numero es 0 o 1 el valor de factorial es 1
 if (number === 0 || number === 1 ){
    return 1;
 }
    //De lo contrario la función se seguria llamando hasta que el numero sea 1 y se va a ir multiplicando por las veces que ha entrado la función así obtnemos el factorial
 else {
    return number * factorial (number - 1);
 }
}

console.log("El factorial es:");
console.log(factorial(number));