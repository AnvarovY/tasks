const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));
let i = 1;

for (let task of todos) {
    if (task.completed) {
      console.log(i + '.' + ' ' + task.title);
    }
    ++i;
  }