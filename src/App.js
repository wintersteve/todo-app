import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 }  from 'uuid';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Meeting',
          completed: true,
        },
        {
          id: 2,
          title: 'Test',
          completed: false
        },
        {
          id: 3,
          title: 'Laundry',
          completed: false
        }
      ]
    }
  }


  // Generate id
  getId = () => {
    if (this.state.todos.length === 0) {
      return 1;
    } else {
      return this.state.todos[this.state.todos.length-1].id + 1;
    }
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: this.getId(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
  
}

export default App;
