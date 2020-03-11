import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/TodoItem.module.css';

export class TodoItem extends Component {

    getDivStyle = () => {
        return {
            display: 'flex',
            margin: '1rem .25rem',
            borderRadius: '.25rem',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? '#f7f7f7' : 'var(--primary)',
            transition: 'all 0.15s ease'
        }
    }

    getBtnStyle = () => {
        return {
            padding: '.8rem 1.5rem',
            border: 'none',
            cursor: 'pointer',
            // background: this.props.todo.completed ? '#f7f7f7' : 'var(--primary)',
            transition: 'all 0.15s ease'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div style={this.getDivStyle()} className={this.props.todo.completed ? '' : styles.active }>
                
                <label style={labelStyle} htmlFor={id}>
                    <p style={{ marginRight: '.5rem' }}>#{id}</p>
                    <p>{title}</p>
                </label>
                
                <div>
                
                    <input 
                        type="checkbox" 
                        id={id}
                        onChange={this.props.markComplete.bind(this, id)} 
                        checked={completed}
                        style={inputStyle}
                    />
                    
                    <button 
                        onClick={this.props.deleteTodo.bind(this, id)} 
                        style={{background: this.props.todo.completed ? '#f7f7f7' : 'var(--primary)'}}
                        className={styles.btn}
                    >
                        <img src="./delete.svg" width="15" alt="trash bin"></img>
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
    alignItems: 'center',
    width: '100%',
    padding: '.75rem .75rem',
    userSelect: 'none',
    cursor: 'pointer'

}

const inputStyle = {
    display: 'none'
}

export default TodoItem
