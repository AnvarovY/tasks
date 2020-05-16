const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let arr = str.split(" ");
let result = [];

for (let cell of arr) {
    let first = cell.slice(0, 1).toUpperCase();
    let after = cell.slice(1);
    result.push(first + after);
}
console.log(result.join(' '));
