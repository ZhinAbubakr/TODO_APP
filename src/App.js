import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Typography } from "antd";

const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    todoList: [],
  };
  handle = (value) => {
    this.setState({ todoList: [...this.state.todoList, value] });
  };
  render() {
    // console.log(this.state.todoList);
    return (
      <div>
        <Router>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Typography style={{ color: "#ffffff" }}>TODO APP</Typography>
            </Header>
            <Layout>
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                    borderRight: 0,
                    textAlign: "center",
                  }}
                >
                  <Link to="/list">
                    <Menu.Item key="1">TODO List</Menu.Item>
                  </Link>
                  <Link to="/create">
                    <Menu.Item key="8">Create TODO</Menu.Item>
                  </Link>
                </Menu>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  Todo List
                  <Switch>
                    <Route
                      path="/list"
                      render={() => (
                        <TodoList
                          handleTodos={this.handle}
                          todoList={this.state.todoList}
                        />
                      )}

                      // component={<TodoList todoList={this.state.todoList} />}
                    />
                    <Route
                      path="/create"
                      render={() => (
                        <CreateTodo
                          handleTodos={this.handle}
                          todoList={this.state.todoList}
                        />
                      )}
                      // component={<CreateTodo todoList={this.state.todoList} />}
                    />
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
        ,
      </div>
    );
  }
}

export default App;
