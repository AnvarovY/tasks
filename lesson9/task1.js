const fs = require("fs");

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
fs.writeFileSync("todos.json", JSON.stringify(todos));