import { observable, action, computed } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];

  lastID = 0;
  @observable viewMode = "all";
  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }
  @action
  deleteTodo(id) {
    this.todos = this.todos.filter(item => {
      return item.id != id;
    });
  }
  @action
  clearCompleted(id) {
    this.todos = this.todos.filter(item => {
      return item.completed == false;
    });
  }
  @action
  changeViewMode(newMode) {
    this.viewMode = newMode;
  }
  @computed
  get itemsLeft() {
    return this.todos.filter(item => !item.completed).length;
  }
  @computed
  get items() {
    switch (this.viewMode) {
      case "all":
        return this.todos;
        break;
      case "completed":
        return this.todos.filter(item => item.completed);
        break;
      default:
        return this.todos.filter(item => !item.completed);
    }
  }
}
const store = new TodoStore();
export default store;
