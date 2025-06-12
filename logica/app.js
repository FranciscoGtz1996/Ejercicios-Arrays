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

