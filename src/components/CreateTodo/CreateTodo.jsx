import React, { Component } from "react";

export default class CreateTodo extends Component {
  state = {
    addTitle: "",
    // addUserId: "",
    addCompleted: "",
    todos: [],
  };

  async AddTodo() {
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.addTitle,
        completed: this.state.addCompleted,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        this.setState({ todos: [...this.state.todos, json] }, () =>
          console.log(this.state.todos)
        )
      );
    // console.log(this.state.todos);
  }

  handle(e) {
    this.setState({ addTitle: e.target.value });
    console.log(this.state.addTitle);
  }
  // AddUserId(e) {
  //   this.setState({ addUserId: e.target.value });
  //   console.log(this.state.addUserId);
  // }
  AddCompleted = (e) => {
    this.setState({ addCompleted: e.target.value });
    console.log(this.state.addCompleted);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handle(e)} />
        {/* <input type="number" onChange={(e) => this.AddUserId(e)} />   */}
        <input type="checkbox" onChange={(e) => this.AddCompleted(e)} />
        <br />
        <br />
        <button onClick={() => this.AddTodo()} value={this.state.todos}>
          SUBMIT TODO
        </button>

        <div>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index} style={{ listStyle: "none" }}>
                {todo.title}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
