const readlineSync = require("readline-sync");

let word = readlineSync.question("word?\n> ");
let result = 'true';

for (let i = 0; i <= (word.length / 2); ++i) {
    if (word[i] !== word[(word.length - (i+1))]) {
        result = 'false';
    }
}
console.log(result);