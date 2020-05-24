const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));
let newTodos = [];
for (let i = 0; i < todos.length; ++i) {
    if (!todos[i].completed) {
        newTodos.push(todos[i]);
    }
}
fs.writeFileSync("todos.json", JSON.stringify(newTodos));
console.log(todos.length - newTodos.length + ' todos removed');
