//Recorre todos los elementos y elimana los quue tengan la palabra gat
const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]
for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')){
        toys.splice(i, 1);
        i--; // Ajustar el índice después de eliminar un elemento
    }
}
console.log(toys);