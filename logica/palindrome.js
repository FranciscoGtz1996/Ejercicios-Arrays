/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

1. Ingresamos la palabra u oracion
2. Guardamos la palabra en una variable y la normalizamos para que no tenga espacios, mayusculas o signos de puntuacion 
3. Obtenemos el tamaño total de la palabra con el metodo length y lo guardamos en una variable que sera el contador del lado derecho
4. Iniciamos otro contador que llevara la cuenta de la palabra desde el lado izquierdo
5. Un ciclo while para recorrer la palabra, mientras las letras del lado izquierdo sea menor a las del lado derecho
6. Si las letras son iguales del lado izquierdo y derecho, entonces la palabra es palindromo, de lo contrario no lo es

*/


 //Le mostramos al usuario una alerta de bienvenida
    alert("Hola, a continuación vas a ingresar una palabra y te dire si es Palindroma");
const palabra = prompt("Ingresa la palabra: ");
//Normalizamos la palabra pasandola a minusculas y dejando solo letras de la a-z sin puntuación y numeros del 0 al 9
const palabraNormalizada = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
//Obtenemos el tamaño de la palabra que sera nuestro contador de la palabra del lado derecho
let right = palabraNormalizada.length - 1;
//Iniciamos nuestro contador de las letras del lado izquierdo en 0
let left = 0;

//Mientras las letras recorridas sean menor a la palabra completa
while (left < right) {
    //Si la letra normalizada en la posición del lado izquierdo y derecho es igual en contenido entonces es palindromo
    if (palabraNormalizada[left] === palabraNormalizada[right]) {
      console.log("Es palindromo")
    }
    //De lo contrario no es palindromo la palabra
    else {
        console.log("No es palindromo")
    }
    //El contador del lado izquierdo va aumentando para recorrer toda la palabra
    left++;
    //El contador del lado derecho va disminuyendo para recorrer toda la palabra
    right--;
  }
