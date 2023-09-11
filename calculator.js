// Write a function called calculator that takes in 2 numbers and an operator 
// and returns the result of the calculation.

function calculator(a, b, operator) {
    switch(operator) {
        case "/":
            return a / b;
        case "*":
            return a * b;
        case "+":
            return a + b;
        case "-":
            return a - b
        default:
            return "Invalid operator"
        
    }
}

console.log(calculator(5, 5, "!"));