// Write a function called arrayIntersection that takes in two arrays 
// and returns an array containing the intersection of the two input arrays 
// (i.e., the common elements that appear in both arrays).

function arrayIntersection(arr1, arr2) {

    const commonElement = [];

    for (let i = 0; i < arr1.length; i++) {

        if ((arr2.includes(arr1[i])) && !(commonElement.includes(arr1[i]))) {
            commonElement.push(arr1[i]);
        }

    }

    return commonElement;

}

console.log(arrayIntersection([1, 2, 3, 3], [4, 5, 6, 3, 3]));
