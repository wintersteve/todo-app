import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            display: 'flex',
            margin: '.75rem .25rem',
            borderRadius: '.25rem',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? '#f7f7f7' : 'var(--primary)',
            transition: 'all 0.15s ease'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                
                <label style={labelStyle} htmlFor={id}>
                    <p style={{ marginRight: '.5rem' }}>#{id}</p>
                    <p>{title}</p>
                </label>
                
                <div style={{marginLeft: 'auto'}}>
                
                    <input 
                        type="checkbox" 
                        id={id}
                        onChange={this.props.markComplete.bind(this, id)} 
                        checked={completed}
                        style={inputStyle}
                    />
                    
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
                        <i className="fas fa-trash"></i>
                    </button>
                
                </div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const labelStyle = {
    display: 'flex',
    width: '100%',
    padding: '.5rem .75rem',
    userSelect: 'none'
}

const inputStyle = {
    display: 'none'
}

const btnStyle = {
    padding: '.8rem',
    border: 'none'
}

export default TodoItem
