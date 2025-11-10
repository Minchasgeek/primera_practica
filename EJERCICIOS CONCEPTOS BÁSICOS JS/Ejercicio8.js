const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
    let longestWord = '';
    for (let i = 0; i < avengers.length; i++) {
        if (avengers[i].length > longestWord.length) {
            longestWord = avengers[i];
        }       
    }
    return longestWord;
}   

console.log(findLongestWord(avengers));
