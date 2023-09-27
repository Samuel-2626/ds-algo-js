// Write a function called areAllCharactersUnique that takes in a string 
// and returns true or false depending on whether all characters in the 
// string are unique (i.e., no character is repeated).


function areAllCharactersUnique(str) {

    if (str.length === 0) {
        return true;
    }

    for (let i = 0; i < str.length; i++) {

        
        for (let j = 0; j < str.length; j++) {

            if (i === j) {
                continue;
            } else if (str[i] === str[j]) {
                return false; 
            }

        }

    }

    return true;

}

console.log(areAllCharactersUnique("programming"));

