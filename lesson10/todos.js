const readlineSync = require("readline-sync");
const fs = require("fs");
const chalk = require("chalk");

function loadTodos() {
    return JSON.parse(fs.readFileSync("todos.json"));
}
  
function saveTodos(todos) {
    fs.writeFileSync("todos.json", JSON.stringify(todos));
}

function initTodos() {
    if (!fs.existsSync("todos.json")) {
        let todos = [ 
            {
        title: "feed cat",
        completed: true,
            },
            {
        title: "buy products",
        completed: false,
            },
            {
        title: "watch TV",
        completed: false,
            },
        ];
        saveTodos(todos);
    }
}

function renderTodo(num, todo, highlight) {
    let done;
    if (todo.completed) {
        done = '[x]';
    } else {
        done = '[ ]';
    }
    if (highlight) {
        let index = todo.title.toLowerCase().indexOf(highlight.toLowerCase());
        return (
      done + ' ' + num + '. '  + todo.title.slice(0, index) + chalk.red(todo.title.substr(index, highlight.length)) +todo.title.slice(index + highlight.length)
      );
    } else {
      return (done + ' ' + num + '. ' + todo.title);
    } 
}

function listTodos(type) {
    let todos = loadTodos();
    for (let i = 0; i < todos.length; ++i) {
        let todo = todos[i];
        if (type === "all" || (type === "completed" && todo.completed) || (type === "uncompleted" && !todo.completed)) {
            console.log(renderTodo((i + 1), todo));
        }
    }
}

function addTodo(title1) {
    let todos = loadTodos();
    let newTask = {
        title: title1,
        completed: false,
    };
    todos.push(newTask);
    saveTodos(todos);
    console.log('Done!')
}

function toggleTodo(num) {
    let todos = loadTodos();
    num = parseInt(num) - 1;
    let todo = todos[num];
    if (num >= 0 && num < todos.length) {
        if (todo.completed) {
            todo.completed = false;
        }
        else {
           todo.completed = true;
        }
        saveTodos(todos);
        renderTodo((num + 1), todo);
    } else {
        console.log('wrong number');
    }
}

function removeTodo(num) {
    let todos = loadTodos();
    num = parseInt(num) -1;
    if (num >= 0 && num < todos.length) {
        todos.splice(num, 1);
        saveTodos(todos);
        console.log('done!');
    } else {
        console.log('wrong number');
    }
}

function clearTodos() {
    let todos = loadTodos();
    let newTodos = [];
    for (let i = 0; i < todos.length; ++i) {
        if (!todos[i].completed) {
            newTodos.push(todos[i]);
        }
    }
    saveTodos(newTodos);
    console.log(todos.length - newTodos.length + ' todos removed');
}

function searchTodos(search) {
    let todos = loadTodos();

    for (let i = 0; i < todos.length; ++i) {
        if (todos[i].title.toLowerCase().includes(search.toLowerCase())) {
            let highlight = search;
            console.log(renderTodo((i + 1), todos[i], highlight));
        }
    }
}

function sortTodos() {
    let todos = loadTodos();
    let num = 1;

    todos.sort(function(a, b) {
        let titleA=a.title.toLowerCase();
        let titleB=b.title.toLowerCase();
        return parseInt(a.completed) - parseInt(b.completed) || titleA.localeCompare(titleB);
    });
    saveTodos(todos);
    listTodos("all");
}

initTodos();

while (true) {
    let str = readlineSync.question("> ");
    let words = str.split(" ");
    let command = words[0];
  
    if (command === "list") {
        listTodos("uncompleted");
    } else if (command === "list-all") {
        listTodos("all");
    } else if (command === "list-completed") {
        listTodos("completed");
    } else if (command === "add") {
        let title = words.slice(1).join(" ");
        addTodo(title);
    } else if (command === "toggle") {
        let num = parseInt(words[1]);
        toggleTodo(num);
    } else if (command === "remove") {
        let num = parseInt(words[1]);
        removeTodo(num);
    } else if (command === "clear") {
        clearTodos();
    } else if (command === "search") {
        let x = (words[1]);
        searchTodos(x);
    } else if (command === "sort") {
        sortTodos();
    } else if (command === "exit") {
        break;
    } else {
        console.log("wrong command");
    }
  }