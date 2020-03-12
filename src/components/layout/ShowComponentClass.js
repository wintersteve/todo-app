import React, { Component } from 'react'

export class ShowJSX extends Component {

    render() {
        return (
            <div style={{ marginLeft: '1rem' }}>
                <button onClick={this.props.toggleComponentClass}>
                    Show component class
                </button>
            </div>
        )
    }
}

export default ShowJSX
