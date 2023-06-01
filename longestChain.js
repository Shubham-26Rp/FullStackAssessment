const word = '00000111110101001111100001001'

let lettersArr = word.split('');
let currentSequence = [];
let maxSequence = [];

for (let index = 0; index < lettersArr.length; index++) {
    let element = lettersArr[index];
    currentSequence = [element];

    for (let i = index + 1; i < lettersArr.length; i++) {
        if (lettersArr[index] == lettersArr[i]) {
            currentSequence.push(lettersArr[index]);
        } else {
            break;
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }
}

let newWord = maxSequence.join('');

console.log(newWord, newWord.length);