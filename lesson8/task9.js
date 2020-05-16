const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
}
if (str.includes('+')) {
    calc = numbers[0] + numbers[1];
} else if (str.includes('-')) {
    calc = numbers[0] - numbers[1];
 } else if (str.includes('/')) {
    calc = numbers[0] / numbers[1];
 } else if (str.includes('*')) {
    calc = numbers[0] * numbers[1];
 }
if (calc === numbers[2]) {
    console.log(true);
} else {
    console.log(false);
}