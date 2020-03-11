import React, { Component } from 'react'

export class GithubLink extends Component {
    render() {
        return (
            <div style={divStyle}>
                <a href="https://github.com/wintersteve/todo-app">Show GitHub repository</a>
            </div>
        )
    }
}

const divStyle = {
    marginTop: '5rem',
    marginLeft: '.5rem'
}

export default GithubLink
