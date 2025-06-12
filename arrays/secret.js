/*Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
1. Recibimos un array que tiene nombres
 1.1 estos nombres empiezan en mayuscula
 1.2 ordenar el array en orden alfabetico
2. Inicializar una variable para guardar las iniciales
3. utilizar ciclo para recorrer el array
4. obtener la primera letra de cada nombre utilizando la notacion de corchetes
5. Pegar la inicial de cada nombre para retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre

*/

//Funcion expression
const secretName = function(namesArray){
  let societyName ="";
  //función sorted para obtener el arreglo acomodado por letra
  const sortedNames = namesArray.toSorted();
  //ciclo foreach para cada elemento del arreglo
  sortedNames.forEach((name) => societyName = societyName + name[0]);
  return societyName;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));