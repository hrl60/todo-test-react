import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    return (
      <div>
        <section class="main">
          <ul class="todo-list">
            {todoStore.items.map(todo => {
              return <TodoItem todo={todo} />;
            })}
          </ul>
        </section>
      </div>
    );
  }
}
export default TodoItems;
