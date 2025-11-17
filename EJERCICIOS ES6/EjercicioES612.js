//ea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//z varios ejemplos y compruebalos.

function findArrayIndex(array, text) {
    for (const [index, value] of array.entries()) {
        if (value === text) {
            return index;
        }
    }
}


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Rey"));

//ando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto 
//mo parametros (los mismos parametros que en el anterior ejercicio) llame a 
// función anteriormente creada findArrayIndex y obten el indice para 
//steriormente usar la función de javascript .splice() para eliminar el 
//emento del array.
function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== undefined) {
        array.splice(index, 1);
    }
    return array;
}
console.log(removeItem(mainCharacters, "Anakin"));
console.log(removeItem(mainCharacters, "Luke"));

