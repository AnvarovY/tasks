const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operators = ["+", "-", "/", "*"];
let numbers = [];
let Num = "";
let calc = 0;

for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if (digits.includes(char)) {
        Num += char;
    }
    if (Num.length > 0 && (!digits.includes(char) || i === str.length - 1)) {
        numbers.push(parseInt(Num));
        Num = "";
    }
    if (operators.includes(char)) {
        numbers.push(char);
    }
}
for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] === "+") {
        calc = numbers[i-1] + numbers[i+1];
        numbers[i+1] = calc;
    } else if (numbers[i] === "-") {
        calc = numbers[i-1] - numbers[i+1];
        numbers[i+1] = calc;
    } else if (numbers[i] === "*") {
        calc = numbers[i-1] * numbers[i+1];
        numbers[i+1] = calc;
    } else if (numbers[i] === "/") {
        calc = numbers[i-1] / numbers[i+1];
        numbers[i+1] = calc;
    } else if (i === numbers.length -1) {
        console.log(calc);
    }
}

