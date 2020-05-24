const fs = require("fs");
const readlineSync = require("readline-sync");

let toggle = readlineSync.question("toggle?\n> ");
let todos = JSON.parse(fs.readFileSync("todos.json"));

toggle = parseInt(toggle);

if (toggle >= 0 && toggle < todos.length) {
    if (todos[toggle].completed) {
        todos[toggle].completed = false;
    }
    else {
        todos[toggle].completed = true;
    }
    let done;
    if (todos[toggle].completed) {
      done = '[x]';
    } else {
      done = '[ ]';
    }
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    console.log(done + ' ' + toggle + '.' + ' ' + todos[toggle].title);
} else {
    console.log('wrong number')
}
