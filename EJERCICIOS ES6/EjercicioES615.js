//ea una función llamada swap que reciba un array y dos parametros que sean 
//dices del array. La función deberá intercambiar la posición de los valores de 
//s indices que hayamos enviado como parametro. Retorna el array resultante.



const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
console.log(swap(fantasticFour, 0, 1));
console.log(swap(fantasticFour, 3, 2));
console.log(swap(fantasticFour, 0, 3));