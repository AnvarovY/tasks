const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));
let i = 1;

for (let task of todos) {
    let done;
    if (task.completed) {
      done = '[x]';
    } else {
      done = '[ ]';
    }
    console.log(done + ' ' + i + '.' + ' ' + task.title);
    ++i;
  }