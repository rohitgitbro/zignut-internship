/*
 ➔ Task6:Write a program to find the factorial of a number using a recursive function

*/

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
