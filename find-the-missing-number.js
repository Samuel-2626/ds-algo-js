// Write a function called findMissingNumber that takes in an array of 
// unique numbers from 1 to n (inclusive), where one number is missing. 
// It should return the missing number.


function findMissingNumber(arr) {

    if (!arr || arr.length === 0) {
        return undefined;
    }

    const n = arr.length + 1;

    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;




}

console.log(findMissingNumber([1, 2, 3, 4, 6]));
