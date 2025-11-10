const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, name) {

    for (let i = 0; i < param.length; i++) {
        if (param[i] === name) {
            return `El nombre ${name} sí se encuentra en el array.`;
        }
    }  
        return `El nombre ${name} no se encuentra en el array.`;
        
}
console.log(finderName(nameFinder, 'Natasha'));