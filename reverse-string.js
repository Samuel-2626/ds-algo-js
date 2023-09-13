// Write a function called reverseString that takes in a string and 
// returns the reverse of that string. In this section, we are really focusing 
// on loops without using any built-in methods, so try that first. 
// If you get stuck, you can always use the built-in methods to solve the problem.

function reverseString(str) {

    reversedWord = "";


    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }

    return reversedWord;
    
}

console.log(reverseString("Hello"));