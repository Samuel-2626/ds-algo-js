// Write a function called findMaxNumber that takes in an array of numbers 
// and returns the largest number in the array.

function findMaxNumber(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

