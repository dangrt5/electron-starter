// Electron Store

const Store = require("electron-store");

class DataStore extends Store {
  constructor(settings) {
    //same as new Store(settings)
    super(settings);

    this.todos = this.get("todos") || [];
  }

  saveTodos() {
    this.todos = this.set("todos", this.todos);

    //returning this allows method chaining
    return this;
  }

  getTodos() {
    this.todos = this.get("todos") || [];
    return this;
  }

  addTodo(todo) {
    this.todos = [...this.todos, todo];
    return this.saveTodos();
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo);
    return this.saveTodos();
  }
}

module.exports = DataStore;
