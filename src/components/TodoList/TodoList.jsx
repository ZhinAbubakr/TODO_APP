// import React, { Component } from "react";
// import { Spin, Table } from "antd";

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: props.todoList,
//     };
//   }

//   async componentDidMount() {
//     await fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((todosList) => {
//         this.props.handleTodos(todosList);
//         console.log(this.todos);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     const columns = [
//       {
//         title: "Name",
//         dataIndex: "name",
//         key: "name",
//         width: "30%",
//       },
//       {
//         title: "Check",
//         dataIndex: "Check",
//         key: "key",
//       },
//     ];

//     return (
//       <div>
//         <Table dataSource={this.state.todos} colomns={[columns]}></Table>

//         <ul>
//           {this.state.todos.length > 0 ? (
//             <div>
//               {this.state.todos.map((todo) => {
//                 return (
//                   <li key={todo.id} style={{ listStyle: "none" }}>
//                     {todo.title}
//                     <input type="checkbox" value={todo.completed} />
//                   </li>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="example">
//               <Spin size="large" />
//             </div>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoList;

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
