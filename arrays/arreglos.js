/*Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive. */

/*
1. un array de resistencias
2. usando Math.abd obtener el valor absoluto de los elementos del array
3. reduce, usar ciclo para la suma
4. retornar un mensaje del tipo `'123 ohms'`

*/

//Escribimos la firma
//usamos función map para que nos haga la operacion a cada elemento y devuelva un nuevo array
function sumOfResistors(resistorsArray) {
  const resistorAbs = resistorsArray.map((resistor) => Math.abs(resistor));
  console.log(resistorAbs);
  const totalResistance = resistorAbs.reduce((total,current) => total + current,0);
  return `${totalResistance} ohms`;
}

console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));
