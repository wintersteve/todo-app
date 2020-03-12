import React, { Component } from 'react'

export class ShowStateBtn extends Component {
    render() {
        return (
            <div style={{ marginLeft: '1rem' }}>
                <button onClick={this.props.toggleExampleState}>
                    Show state
                </button>
            </div>
        )
    }
}

export default ShowStateBtn
