// FizzBuzz is probably the most common interview question for entry level developers. 
//  least, it used to be. It may not be used as much because of how common it was. 
//  It's a simple problem that tests your ability to think logically and write clean code.

// Traditionally, you loop from 1 to 100 and print out each number. 
// However, if the number is divisible by 3, you print out "Fizz" instead. 
// If the number is divisible by 5, you print out "Buzz" instead. 
// If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.

// In this challenge, you will write a function called fizzBuzzArray that takes in a 
// number and returns an array. The array should contain all the numbers from 1 to the 
// number passed in. However, if the number is divisible by 3, you should replace the 
// number with "Fizz". If the number is divisible by 5, you should replace the 
// number with "Buzz". If the number is divisible by both 3 and 5, you should replace the 
// number with "FizzBuzz".

function fizzBuzzArray(number) {

    const arr = [];

    for (let i = 1; i <= number; i++) {

        if (((i % 3) === 0) && ((i % 5) === 0)) {
            arr.push("FizzBuzz");
        } else if ((i % 3) === 0)  {
            arr.push("Fizz")
        } else if ((i % 5) === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i)
        }

    }

    return arr;

}

console.log(fizzBuzzArray(15));

