/*
 Task2:NeedtocreateaJavascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,
 9, 10.9")
*/




function sumOfString(inputString) {
    let sum = 0; 
    const numbers = inputString.split(',');
    for (let i = 0; i < numbers.length; i++) {
        
        const num = parseFloat(numbers[i].trim());

        
        if (!isNaN(num)) {
            sum += num;
        }
    }

    return sum;
}

console.log(sumOfString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")); 