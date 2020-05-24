const fs = require("fs");
const readlineSync = require("readline-sync");

let task = readlineSync.question("task?\n> ");
let newTask = {
    title: task,
    completed: false,
};

let todos = JSON.parse(fs.readFileSync("todos.json"));
todos.push(newTask);

fs.writeFileSync("todos.json", JSON.stringify(todos));

console.log('Done!')