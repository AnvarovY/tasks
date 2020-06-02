const fs = require("fs");
const readlineSync = require("readline-sync");

let remove = readlineSync.question("remove?\n> ");
let todos = JSON.parse(fs.readFileSync("todos.json"));

remove = parseInt(remove);

if (remove >= 0 && remove < todos.length) {
    todos.splice(remove, 1);
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    console.log('done!');
} else {
    console.log('wrong number');
}