/*Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

1. Ingresamos el numero de entrada y la cantidad de multiplos que se necesitan
2. Hacemos un ciclo for de la cantidad de los multiplos deseados para que cada numero se vaya multiplicando por el indice del for y asi obtener los multiplos
3. Guardamos el nuevo arreglo con los multiplos deseados
3.1 Eliminamos el primer elemento del nuevo arreglo con el metodo shift ya que este nuevo arreglo inicia en cero
4. Devolvemos el arreglo con los multiplos
*/


//Funcion expression
function arrayMultiplos (first, last) {
//Variables
//La variable a tomará el valor de entrada
  let a = first;
//La variable b tomará la cantidad de multiplos que queremos
  let b = last;
//El arreglo c será el que se llenará con los multiplos deseados
  let c = [];
//Ciclo for que será menor o igual a la cantidad de multiplos deseados
  for (let i=0; i<=b; i ++){
//Cada indice del arreglo se multiplicará por el valor de entrada y así obtenemos los multiplos 
    c[i] = a*i;
  }
//Con el metodo shift quitamos el primer elemento del arreglo que es 0
  c.shift();

  return c;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));
console.log(arrayMultiplos(5, 12));
