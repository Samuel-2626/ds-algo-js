// Write a function called twoSum that takes an array of integers and a target 
// integer as input and returns an array of indices of the two numbers that add up to the target.


function twoSum(arr, target) {

    const numSet = new Set();


    for (let i = 0; i < arr.length; i++) {

        const complement = target - arr[i];

        if (numSet.has(complement)) {
            return [arr.indexOf(complement), i];
        }

        numSet.add(arr[i])

    }

    return [];

}

console.log(twoSum([2, 7, 11, 15], 9));
