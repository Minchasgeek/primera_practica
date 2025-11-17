//ea una función llamada rollDice() que reciba como parametro el numero de caras qu//queramos que tenga el dado que deberá simular el codigo dentro de la función. 
//mo hemos dicho, que la función use el parametro para simular una tirada de dado 
//retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
//eocupes! Busca información sobre la función de javascript Math.random()
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDice(6));
console.log(rollDice(10));
console.log(rollDice(20));