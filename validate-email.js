// Write a function called validateEmail that takes in a string and returns whether 
// the string is a valid email address. For the purposes of this challenge, a valid 
// email address is defined as a string that contains an @ symbol and a . symbol.


function validateEmail(str) {

    const pattern = /^[a-zA-Z0-9]{1,15}@[a-zA-Z0-9]{1,15}\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;

    return pattern.test(str);

}

console.log(validateEmail('john@gmail.com'));


