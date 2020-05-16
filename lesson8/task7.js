const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let strFormatted = '';

for (let i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' || (str[i] !== str[(i-1)] && i !== 0)) {
        strFormatted += str[i];
    }
}
console.log(strFormatted);
