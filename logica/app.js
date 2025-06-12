  /*   <!-- User profile
Write a program that prompts a user for their data: username, 
age, and a list of their favorite movies. Store the information and
 then showcase it in the console. Take note that the output for the films should add a small message like: '
 The film {film} is one of my favorites'. 
 1. username, edad y una lista de peliculas favoritas
 2. utilizar los prompt necesarios para que el usuario ingrese su informacion
 3. ocupando un array vamos a almacenar las peliculas del usuario
 4. Mostrar en consola la informacion del usuario, donde cada pelicula debe tener un mensaje comoe este 
 The film {film} is one of my favorites
 */

let counter = 0;
const username = prompt("¡Hola! Ingresa tu nombre de usuario: "); //Ingresamos el nombre de usuario
const age = prompt("Ingresa tu edad: "); //Ingresamos la edad
//let lo usamos para reasignar valor de la variable
const favoriteMovies = []; //Creamos un arreglo para las peliculas
//Vamos a pedir 5 peliculas
alert("A continuación, vas a ingresar 5 peliculas favoritas");
for(let i=1; i<=5; i++){ //Ciclo for para ingresar las 5 peliculas
    //` Bcakticks
   favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}`));
   /*${i}, nos muestra el valor de la variable */
}
//Mostramos en consola los datos ingresados
console.log(`Hola, soy ${username} y tengo ${age} años y mis peliculas favoritas son: 
    `);

//Mostramos el arreglo de peliculas
while(counter<favoriteMovies.length){
    console.log(`Mi pelicula favorita numero ${counter + 1} es: ${favoriteMovies[counter]} `);
    counter++;
}

