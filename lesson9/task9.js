const fs = require("fs");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

let search = readlineSync.question("search?\n> ");
let todos = JSON.parse(fs.readFileSync("todos.json"));
let index;

for (let i = 0; i < todos.length; ++i) {
    if (todos[i].title.toLowerCase().includes(search.toLowerCase())) {
        index = todos[i].title.toLowerCase().indexOf(search.toLowerCase());
        let done;
        if (todos[i].completed) {
        done = '[x]';
        } else {
         done = '[ ]';
        }
        console.log(
            done + ' ' + (i + 1) + '. ' + todos[i].title.slice(0, index) + chalk.red(todos[i].title.substr(index, search.length)) + todos[i].title.slice(index + search.length)
            );
    }
}
