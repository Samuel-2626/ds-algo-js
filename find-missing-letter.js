// Write a function called findMissingLetter that takes in 
// an array of consecutive (increasing) letters as input and 
// returns the missing letter in the array.


function findMissingLetter(arr) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== alphabet[startIndex + i]) {
            return alphabet[startIndex + i];
        }
    }

    return " ";

}

console.log(findMissingLetter(['a', 'b', 'c', 'e']));