// Write a function called removeDuplicates that takes in an array and 
// returns a new array with duplicates removed.


function removeDuplicates(arr) {

    let newArr = [];

   
    for (let i = 0; i < arr.length; i++) {

        
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
        
    }

    return newArr



}

console.log(removeDuplicates([2, 1, 1, 2, 1, 1, 1, 2, 1, 1]));