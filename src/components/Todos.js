import React from 'react';
import TodoItem from './TodoItem';
import Notification from './layout/Notification'
import PropTypes from 'prop-types';

class Todos extends React.Component {

    render() {

        if (this.props.todos.length < 1)
        {
            return <Notification />
        } 
        else 
        {
            return this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
            ));
        }
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired 
}

export default Todos;