const array = ['portugal', 'camaroes', 'brasil', 'belize', 'argelia']
const alphabet = ['a', 'b', 'c', 'd'];

for (let i = 'e'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  alphabet.push(String.fromCharCode(i));
}
// console.log(alphabet)

const alphaArray = []
for (let i = 0; i < alphabet.length; i++) {
    alphaArray.push([alphabet[i], i+1])
}
// console.log(alphaArray)
function firstWord (word1, word2) {
    let firstWord = ''
    const wlen1 = word1.length
    const wlen2 = word2.length
    const smallerWord = wlen1 > wlen2 ? wlen2 : wlen1

    for (let i = 0; i < smallerWord.length; i++) {
        if((word1[i])[1] < (word2[i])[1]) {
            console.log((word1[i])[1])
            firstWord = word1
            break;
        } 
        else if ((word1[i])[1] === (word2[i])[1]) {
            return i+1;
        }
        firstWord = word2
        break;
    }
    return firstWord
    
}

function sortArray () {
const sortedArray = []

for (let i = 0; i < array.length; i++)    {
    for (let j = i; j < array.length; j++)
    if (array[i])
        return 0;
}

return sortedArray;
}

console.log(firstWord('brasil', 'arg'))

// criar dict A a Z (1 a 26)