const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
    const uniqueElements = [];
    for (let i = 0; i < param.length; i++) {
        if (!uniqueElements.includes(param[i])) {
            uniqueElements.push(param[i]);
        }
    }
    return uniqueElements;
}   
console.log(removeDuplicates(duplicates));
