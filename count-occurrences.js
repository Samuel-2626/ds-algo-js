// Write a function called countOccurrences() that takes in a string and a character 
// and returns the number of occurrences of that character in the string.


// function countOccurrences(string, character) {
//     let occurrence = 0;
//     for (let i = 0; i < string.length; i++)  {
//         if (string[i] === character) {
//             occurrence ++;
//         }
//     }
//     return occurrence;
// }

const countOccurrences = (str, char) => console.log(str.split(char));

console.log(countOccurrences('hello', 'l'));
