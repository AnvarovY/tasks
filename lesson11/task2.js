const _ = require('lodash');
const readlineSync = require("readline-sync");

// Задача 8-3
let str = readlineSync.question("str?\n> ");

console.log('Big ' + str.match(/[A-Z]/g).length + '\n' + 'Small ' + str.match(/[a-z]/g).length); 

// Задача 8-7
let str1 = readlineSync.question("str?\n> ");
let strNew = str1.replace(/ {2,}/g, ' ');
console.log(strNew.trim());

// Задача 8-8
let str2 = readlineSync.question("str?\n> ");

console.log(str2.replace(/( |^)[a-z]/g, x => x.toUpperCase()));

// Задача 8-9
let str3 = readlineSync.question("str?\n> ");
let numbers1 = str3.match(/\d+/g);
let calc1 = 0;
if (str3.includes('+')) {
    calc1 = parseInt(numbers1[0]) + parseInt(numbers1[1]);
} else if (str3.includes('-')) {
    calc1 = parseInt(numbers1[0]) - parseInt(numbers1[1]);
 } else if (str3.includes('/')) {
    calc1 = parseInt(numbers1[0]) / parseInt(numbers1[1]);
 } else if (str3.includes('*')) {
    calc1 = parseInt(numbers1[0]) * parseInt(numbers1[1]);
 }
if (calc1 === parseInt(numbers1[2])) {
    console.log(true);
} else {
    console.log(false);
}

// Задача 8-10
let str4 = readlineSync.question("str?\n> ");
let numbers = str4.match(/\d+|[+-/*]/g);
let calc = 0;
console.log(numbers)
for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] === "+") {
        calc = parseInt(numbers[i-1]) + parseInt(numbers[i+1]);
        numbers[i+1] = calc;
    } else if (numbers[i] === "-") {
        calc = parseInt(numbers[i-1]) - parseInt(numbers[i+1]);
        numbers[i+1] = calc;
    } else if (numbers[i] === "*") {
        calc = parseInt(numbers[i-1]) * parseInt(numbers[i+1]);
        numbers[i+1] = calc;
    } else if (numbers[i] === "/") {
        calc = parseInt(numbers[i-1]) / parseInt(numbers[i+1]);
        numbers[i+1] = calc;
    } else if (i === numbers.length -1) {
        console.log(calc);
    }
}