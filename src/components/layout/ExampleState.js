import React, { Component } from 'react'

export class ExampleState extends Component {
    render() {
        return (
            <div style={divStyle}>
                <p> { 'state = {' } </p>
                    <p style={ { marginLeft: '1.5rem', color: 'var(--primary)' } }> { 'todos: [' } </p>
                        <p style={ { marginLeft: '2.5rem' } }> { '{' } </p>
                            <p style={ { marginLeft: '4rem' } }>{ 'id: ' } {this.props.todo.id},</p>
                            <p style={ { marginLeft: '4rem' } }>{ 'title: ' } {this.props.todo.title},</p>
                            <p style={ { marginLeft: '4rem' } }>{ 'completed: ' } {this.props.todo.completed ? 'true' : 'false'},</p>
                        <p style={ { marginLeft: '2.5rem' } }>{ '}'}</p>
                    <p style={ { marginLeft: '1.5rem' } }>]</p>
                <p>}</p>
            </div>
        )
    }
}

const divStyle = {
    position: 'absolute',
    right: '-15rem',
    top: '3rem'
}

export default ExampleState
