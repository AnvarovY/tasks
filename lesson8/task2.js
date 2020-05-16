const readlineSync = require("readline-sync");

let n = readlineSync.question("Words count (n)?\n> ");
let arr = [];

for (let i = 1; i <= n; ++i) {
    let word = readlineSync.question(i +" word?\n> ");
    arr.push(' ' + word);
}

console.log(arr + '');