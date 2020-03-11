import React from 'react';
import TodoItem from './TodoItem';
import Notification from './layout/Notification';
import Note from './layout/Note';
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
                <div key={ 'div' + todo.id } style={{position: 'relative'}}>
                    <TodoItem todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
                    <Note showComponents={this.props.showComponents} color='var(--primary)' />
                </div>
                
            ));
        }
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired 
}

export default Todos;