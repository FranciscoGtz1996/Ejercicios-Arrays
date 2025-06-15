/*Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

1. Recibir un arreglo de usuarios
2. Si son más de dos usuarios mostraremos los 2 primeros usuarios y solo el numero de cuantos usuarios más están conectados
3. Convertimos el arreglo de usuarios a string para mostrar en consola

*/

//Funcion expression
const onlineStatus = function(usersOnline){
//Creamos nuestras variables globales
//a para el arreglo de usuarios
let a = [];
//removed para los usuarios que no apareceran en consola
let removed = [];
//c para saber cuántos usuarios no fueron mostrados en consola
let c = 0;

//Si solo hay un usuario
if(usersOnline.length == 1){
//Le quitamos las comillas al usuario
    const d = usersOnline.join(", ");
//Mostramos en consola
    console.log(usersOnline[0] + " and " + c + " more online");
}

//Condicional si hay 2 usuarios o más
else if(usersOnline.length >= 2){
//Ciclo for para quedarnos solo con el usuario 0 y 1 (1 y 2)
    for(let i = 0; i <= 1; i++){
//El arreglo a se queda solo con los elementos/usuarios 0 y 1 
    a[i] = usersOnline[i];
}
//Ahora guardamos en otro arreglo los usuarios no mostrados en consola
removed = usersOnline.splice(2);
//Ahora guardamos el numero de cunatos usuarios no se mostraron en consola
c = removed.length;
//Eliminamos las comillas de los usuarios para mostrarlos en consola
const d = a.join(", ");
//Mostramos en consola los usuarios concatenando nuestras variables con lo que vamos a mostrar
return `${d} and ${c} more online`;
}
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['glassedFer', 'mockIng99', 'glassedFer', 'hearthbreak', 'cold']));
console.log(onlineStatus(['glassedFer', 'hearthbreak']));
console.log(onlineStatus(['glassedFer']));