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
    return (done + ' ' + num + '.' + ' ' + todo.title);
}

function listTodos(type) {
    let todos = loadTodos();
    for (let todo of todos) {
        let num = 1;
        if (type === "all" || (type === "completed" && todos.completed) || (type === "uncompleted" && !todos.completed)) {
            console.log(renderTodo(num, todo));
            ++num;
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
    num = parseInt(num);
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
    num = parseInt(num);
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

function searchTodos(str) {
    let todos = loadTodos();
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
}

function sortTodos() {
    let todos = loadTodos();
    let num = 1;

    todos.sort(function(a, b) {
        let titleA=a.title.toLowerCase();
        let titleB=b.title.toLowerCase();
        return Number(a.completed) - Number(b.completed) || titleA.localeCompare(titleB);
    });
    saveTodos(todos);
    listTodos("all");
}