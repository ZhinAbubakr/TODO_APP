import React, { Component } from "react";
import { Spin, Table } from "antd";

class TodoList extends Component {
  render() {
    console.log(this.props.todoList);
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
      },
      {
        title: "Check",
        dataIndex: "Check",
        key: "key",
      },
    ];

    return (
      <div>
        <Table dataSource={this.props.todoList} colomns={[columns]}></Table>

        <ul>
          {this.props.todoList.length > 0 ? (
            <div>
              {this.props.todoList.map((todo) => {
                return (
                  <li key={todo.id} style={{ listStyle: "none" }}>
                    {todo.title}
                  </li>
                );
              })}
            </div>
          ) : (
            <div className="example">
              <Spin size="large" />
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;
