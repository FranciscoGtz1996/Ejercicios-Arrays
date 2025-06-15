/*
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

1. Recibimos arreglo de numeros
2. Hacemos un ciclo for para recorrer cada elemento del arreglo
3. Inicialiazmos dos contadores, 1 llevará la cuenta de numeros positivos y otro de numeros negativos
4. Si el contador de numeros positivos es mayor al de numeros negativos entonces el arreglo es true dominante positivo, de lo contrario es false

*/

//Funcion expression
function positiveDom (arreglo) {
//Variables
//Contador de numeros negativos en el arreglo
let counterA = 0;
//Contador de numeros positivos en el arreglo
let counterB = 0;
//Booleano si hay mas numeros positivos en el arreglo es true
let esDominante = true;
//Ciclo for para recorrer los elementos del arreglo
for (let i=0; i<=arreglo.length; i++){
//Condicional si el elemento del arreglo es menor o igual a cero    
    if(arreglo[i] <= 0){
        //Nuestro contador de numeros negativos aumenta +1
        counterA ++;
    }
//Si el elemento del arreglo es mayor o igual a 1
    else if(arreglo[i] >= 1){
        //Nuestro contador de numeros positivos aumenta +1
        counterB++;
    }
}
//Si el contador de numeros positivos fue mayor al de numeros negativos el arreglo es positivo dominante es true
if(counterB>counterA){
    return esDominante;
}
//De lo contrario el arreglo no es positivo dominante es false
else if(counterB<counterA){
    return esDominante = false;
}

}

console.log(positiveDom([-1, -3, -5, 4, 6767]));
console.log(positiveDom([1, 3, -5, 4, 6767]));
console.log(positiveDom([1, 3, 5, 4, 6767]));
console.log(positiveDom([-1, -3, -5, -4, -6767]));