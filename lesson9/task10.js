const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));
let i = 1;

todos.sort(function(a, b) {
    let titleA=a.title.toLowerCase();
    let titleB=b.title.toLowerCase();
    if (Number(a.completed) < Number(b.completed)) {
        return -1;
    }
    if (Number(a.completed) > Number(b.completed)) {
        return 1;
    }
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
   });

   fs.writeFileSync("todos.json", JSON.stringify(todos));

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
