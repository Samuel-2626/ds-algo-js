// Write a function called findFirstNonRepeatingCharacter that takes in a 
// string and returns the first non-repeating character in the string.

// If there are no non-repeating characters, the function should return null.


function findFirstNonRepeatingCharacter(str) {

    for (let i = 0; i < str.length; i = i + 2) {

        if (i === str.length - 1) {
            return null;
        } else if (str[i] !== str[i + 1]) {
            return str[i];
        }        

    }

    return null;

}

console.log(findFirstNonRepeatingCharacter("aabbcc"));
