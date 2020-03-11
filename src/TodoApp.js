import React from 'react';

// Import Components
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import ShowComponents from './components/layout/ShowComponents';
import GithubLink from './components/layout/GithubLink';

import './App.css';

class TodoApp extends React.Component {

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
      ],
      showComponents: false
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

  toggleComponents = () => {
    this.state.showComponents ? this.setState({ showComponents: false }) : this.setState({ showComponents: true });
  }

  render() {
    return (
      <div className="container">
        <Header showComponents={this.state.showComponents} />
        <AddTodo showComponents={this.state.showComponents} addTodo={this.addTodo} />
        <Todos showComponents={this.state.showComponents} todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        <ShowComponents toggleComponents={this.toggleComponents} showComponents={this.state.showComponents} />
        <GithubLink />
      </div>
    );
  }
  
}

export default TodoApp;
