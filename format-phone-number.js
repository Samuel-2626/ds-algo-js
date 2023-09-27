// Write a function called formatPhoneNumber that takes in an array of numbers and 
// returns a string representing the phone number formed by concatenating the numbers 
// in the specified format.


function formatPhoneNumber(arr) {

    const first = arr.slice(0, 3).join("");
    const second = arr.slice(3, 6).join("");
    const third = arr.slice(6).join("");

    const formattedNumber = `(${first}) ${second}-${third}`;

    return formattedNumber;    

}


console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));