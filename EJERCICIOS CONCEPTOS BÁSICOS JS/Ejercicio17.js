//Utiliza for in para imprimir los datos del alien.
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const key in alien) {
    console.log(key + ": " + alien[key])
}
