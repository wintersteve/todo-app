import React from 'react';
import TodoItem from './TodoItem';
import Notification from './layout/Notification';
import Note from './layout/Note';
import PropTypes from 'prop-types';

class Todos extends React.Component {


    getDivStyle = () => {
        return {
            position: 'relative',
            border: '2px solid',
            borderRadius: '.25rem',
            borderColor: this.props.showComponents === true ? 'var(--primary)' : 'transparent',
            padding: '.5rem',
            margin: '.25rem 0'
        }
    }

    render() {

        if (this.props.todos.length < 1) return <Notification />;

        // else if (this.props.showComponents === true) return '';

        else 
        {
            return this.props.todos.map((todo) => (
                <div key={ 'div' + todo.id } style={this.getDivStyle()}>
                    <TodoItem todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
                    <Note showComponents={this.props.showComponents} color='var(--primary)' text="<Todo Item />" />
                </div>
                
            ));
        }
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired 
}

export default Todos;