import React, { Component } from 'react';
import Todo from './Todo';
import {Link} from "react-router-dom"

class TodoList extends Component {
  render() {
    return (
      <div> {this.props.todos.map((todo, index) => (
        <Todo
            key={index}
            content={todo.content}
            completed={todo.completed}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;