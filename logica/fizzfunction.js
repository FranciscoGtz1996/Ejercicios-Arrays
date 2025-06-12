
//Firma de la función
//Será función arrow
const fizzBuzz = (counterNumber) =>{
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
fizzBuzz(20);