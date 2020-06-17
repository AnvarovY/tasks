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
    let done = (todo.completed) ? '[x]' : '[ ]';
    if (highlight) {
        return (
            done + ' ' + num + '. ' + highlight);
    } else {
        return (done + ' ' + num + '. ' + todo.title);
    }
}

function listTodos(type) {
    let todos = loadTodos();
    function filtertodo(todo, type) {
        return type === "all" || (type === "completed" && todo.completed) || (type === "uncompleted" && !todo.completed);
    }

    todos
        .map((item, index) => ({
            todo: item,
            index: index,
        }))
        .filter(x => filtertodo(x.todo, type))
        .forEach((todo) => console.log(renderTodo(todo.index + 1, todo.todo)));
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
    num = parseInt(num) - 1;
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
    let newTodos = todos.filter(x => !x.completed);

    saveTodos(newTodos);
    console.log(todos.length - newTodos.length + ' todos removed');
}

function searchTodos(search) {
    let todos = loadTodos();
    let regexp = new RegExp(`${search}`, 'gi');
    function replacer(match) {
        return chalk.red(match);
    }

    todos
        .map((item, index) => ({
            todo: item,
            index: index,
        }))
        .filter((x) => x.todo.title.toLowerCase().includes(search.toLowerCase()))
        .forEach(function (item) {
            let find = item.todo.title.replace(regexp, replacer);
            console.log(renderTodo(item.index + 1, item.todo, find));
        })
}

function sortTodos() {
    let todos = loadTodos();

    todos.sort(function (a, b) {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
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