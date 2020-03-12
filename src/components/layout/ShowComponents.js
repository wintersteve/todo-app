import React, { Component } from 'react';

export class ShowComponents extends Component {
    render() {
        return (
            <div>
                <a style={btnStyle} onClick={this.props.toggleComponents}>
                    { this.props.showComponents ? 'Hide components' : 'Show components' }
                </a>
            </div>
        )
    }
}

const btnStyle = {
    fontSize: '1rem',
    cursor: 'pointer'
}

export default ShowComponents
