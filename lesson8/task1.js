const readlineSync = require("readline-sync");

let word1 = readlineSync.question("1 word?\n> ");
let word2 = readlineSync.question("2 word?\n> ");
let word3 = readlineSync.question("3 word?\n> ");

console.log(word1 + "," + word2 + "," + word3);