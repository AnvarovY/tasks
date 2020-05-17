const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let p = parseInt(readlineSync.question("p?\n> "));
let l = parseInt(readlineSync.question("l?\n> "));

console.log(str.slice(str, p) + str.slice(p + l));