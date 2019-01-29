"use strict";

const { ipcRenderer } = require("electron");

// delete todo by its text value
const deleteTodo = e => {
  ipcRenderer.send("delete-todo", e.target.textContent);
};

document.getElementById("createTodoBtn").addEventListener("click", () => {
  ipcRenderer.send("add-todo-window");
});

ipcRenderer.on("todos", (event, todos) => {
  // get the todos ul
  const todosList = document.getElementById("todoList");
  const todoItems = todos.reduce((html, todo) => {
    html += `<li class="todo-item">${todo}</li>`;
    return html;
  }, "");

  //set list html to the todos items
  todoList.innerHTML = todoItems;

  // add click handlers to delete the clicked todo
  todoList.querySelectorAll(".todo-item").forEach(item => {
    item.addEventListener("click", deleteTodo);
  });
});
