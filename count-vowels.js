// Write a function called countVowels that takes in a string and 
// returns the number of vowels in the string.

function countVowels(str) {

    let word = str.toLowerCase()

    const vowelLetters = ["a", "e", "i", "o", "u"];

    let count = 0;

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowelLetters.length; j++) {
            if (word[i] == vowelLetters[j]) {
                count++;
            }
        }
    }

    return count

}

console.log(countVowels('Coding Challenge')); // 6

