// Let's start off with a fairly simple challenge, but one that uses a few 
// different array methods. Write a function called sumOfEvenSquares that 
// takes an array of numbers and returns the sum of the squares of the even numbers in the array.



function sumOfEvenSquares(arr) {

    // [1, 2, 3, 4, 5, 6]
    
    const evenNumbers = arr.filter((num) => {
        return num % 2 === 0;
    })

    const squareEvenNumbers = evenNumbers.map((num) => {
        return num ** 2;
    })

    const total = squareEvenNumbers.reduce((total, num) => {
        return total + num;
    }, 0)

    return total

}

console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]));

