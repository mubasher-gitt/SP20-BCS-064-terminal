import React, { Component } from 'react';
import {Link } from "react-router-dom"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.completed
    };
  }

  handleChange = event => {
    this.setState({ completed: event.target.checked });
  };

  render() {
    return (
      <div>
        <input checked={this.state.completed} onChange={this.handleChange}/>
        <label>{this.props.content}</label>
      </div>
    );
  }
}

export default Todo;