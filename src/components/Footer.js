import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{todoStore.itemsLeft}</strong> item left
        </span>
        <ul class="filters">
          <li>
            <a
              class={todoStore.viewMode == "all" ? "selected" : " "}
              href="#/"
              onClick={() => todoStore.changeViewMode("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              class={todoStore.viewMode == "active" ? "selected" : " "}
              onClick={() => todoStore.changeViewMode("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              class={todoStore.viewMode == "completed" ? "selected" : " "}
              onClick={() => todoStore.changeViewMode("completed")}
            >
              Completed
            </a>
          </li>
        </ul>
        <button class="clear-completed" onClick={()=>todoStore.clearCompleted()}>Clear completed</button>
      </footer>
    );
  }
}
export default Footer;
