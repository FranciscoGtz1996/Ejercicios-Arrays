/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.


1. Hacer un ciclo for y pedir por consola ingresar 10 numeros
 1.1 Guardar los numeros en un arreglo
2. Condición si ya ingreso los diez numeros 
 2.1 Ordenamos el arreglo de forma ascendente con la función toSorted
3. Sino a ingresado los 10 numeros, sigue ingresando hasta llegar a 10
4. Mostrar el ultimo valor del arreglo ordenado que sería el numero más grande

*/
    //Creamos un arreglo para los 10 numeros
     const numbers = []; 
    //Le mostramos al usuario una alerta de bienvenida
    alert("Hola, a continuación vas a ingresar 10 numeros al azar y te dire cuál es el mayor");
    //Ciclo for para ingresar los 10 numeros al arreglo
for(let i=0; i<=9; i++){
    //Guardamos los 10 numeros en el arreglo numbers[]
    numbers.push(prompt(`Ingresa el numero ${i + 1}`));
    //Si el arreglo ya tiene los 10 numeros
    if(i==9){
    //Ordenamos el arreglo de forma ascendente con la funcion toSorted
    const sortedValues = numbers.toSorted((a, b) => a - b);
    //Mostramos en pantalla el ultimo valor del arreglo ordenado, seria el numero mayor
    console.log(`El numero mayor es ${sortedValues[9]}`);
    }
    //Sino a ingresado los 10 numeros, sigue pidiendo ingresar numeros
    else{
        continue;
    }
}











//Firma de la función
//Será función arrow
/*const fizzBuzz = (counterNumber) =>{
   let counter = 1;
   do{ //ciclo d-while para la funcion
  if(counter%3===0 && counter%5===0){ //condicion para divisibles por 3 y 5
    console.log(`El numero ${counter} es FizzBuzz`);
  }
  else if(counter%3 === 0){ //divisibles por 3
    console.log(`El numero ${counter} es Fizz`);
  }
  else if(counter%5 === 0){ //divisibles por 5
    console.log(`El numero ${counter} es Buzz`);
  }
  else{
    console.log(counter);
  }
  counter++;
}while(counter<=counterNumber);
};

console.log("50 numeros");
fizzBuzz(50);
console.log("20 numeros");
fizzBuzz(20);*/