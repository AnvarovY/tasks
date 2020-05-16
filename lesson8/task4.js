const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let arr = str.split(" ");
let longword = 0;
let word = '';

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longword)  {
        longword = arr[i].length;
        word = arr[i];
    }
}
console.log(word)