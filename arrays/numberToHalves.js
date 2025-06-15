/*Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

1. Recibir un numero
2. Guardar el numero en un arreglo
2. Al numero recibido dividirlo entre 2 para obtener su mitad
3. Guardar el resultado y pasarlo a un arreglo de 2 elementos concatenando el resultado anterior
4. Mostrar el arreglo concatenado
*/


//Funcion expression
const numDiv = function(number){
//Hacemos un arreglo para el numero    
const numberArray = [];
//Ponemos el numero en el arreglo creado
numberArray.push(number);
//Para obtener la mitad del numero usamos la función map y dividimos el elemento del arreglo entre 2
const map1 = numberArray.map((x) => x / 2);
//Ahora para mostrar en pantalla el resultado anterior, creamos otro arreglo concatenado con el mismo valor en los dos indices del arreglo (0 y 1)
const array3 = map1.concat(map1);
//Mostramos en consola
return `Halves de tu numero es: ${[array3]}`;
}

console.log(numDiv(4));
console.log(numDiv(10));
console.log(numDiv(22));
console.log(numDiv(55));

