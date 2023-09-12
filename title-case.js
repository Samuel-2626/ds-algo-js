// Write a function called titleCase that takes in a string and 
// returns the string with the first letter of each word capitalized.

function titleCase(str) {
    let lowerCaseWord = str.toLowerCase();
    let titleCaseWord = "";

    for (let i = 0; i < lowerCaseWord.length; i++) {
        if (i == 0) {
            titleCaseWord += lowerCaseWord[i].toUpperCase();
        }
        else if (lowerCaseWord[i - 1] == " ") {
            titleCaseWord += lowerCaseWord[i].toUpperCase();
        }
        else {
            titleCaseWord += lowerCaseWord[i];
        }
        
    }

    return titleCaseWord;

}

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase('sHoRt AnD sToUt')) // Short And Stout
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')) // Here Is My Handle Here Is My Spout