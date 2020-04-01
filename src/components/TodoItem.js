import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
@observer
class TodoItem extends Component {
  onToggle=()=>{
    this.props.todo.toggle()
  }
  onDestroy=()=>{
    this.props.todo.delete()
  }
  render() {
    const { todo } = this.props;
    return (
      <div>
        <li class={todo.completed ? "completed" : " "}>
          <div class="view">
            <input class="toggle" type="checkbox" checked={todo.completed} onChange={this.onToggle} />
            <label>{todo.title}</label>
            <button class="destroy" onClick={this.onDestroy}></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
      </div>
    );
  }
}
export default TodoItem;
