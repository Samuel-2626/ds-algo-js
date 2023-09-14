// Write a function called isPalindrome that takes in a string 
// and returns true if the string is a palindrome and false if it is not.

function isPalindrome(str) {

    let word = str.toLowerCase()
    
    let onlyLettersAndNumbers = word.match(/[0-9a-z]/g);

    let isWordPalindrome = false

    for (let i = 1; i <= onlyLettersAndNumbers.length; i++) {
        if (onlyLettersAndNumbers[(i - 1)] != onlyLettersAndNumbers[(onlyLettersAndNumbers.length - i)]) {
            return false
        } else {
            isWordPalindrome =  true
        }
    }

    return isWordPalindrome


}

console.log(isPalindrome("racecar"))

