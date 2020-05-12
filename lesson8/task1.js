const readlineSync = require("readline-sync");

let name = readlineSync.question("Как тебя зовут?\n> ");
console.log("Привет, " + name + "!");