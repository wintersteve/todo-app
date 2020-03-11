import React, { Component } from 'react';

export class ShowComponents extends Component {
    render() {
        return (
            <div>
                <button style={btnStyle} onClick={this.props.toggleComponents}>
                    { this.props.showComponents ? 'Hide components' : 'Show components' }
                </button>
            </div>
        )
    }
}

const btnStyle = {
    marginTop: '4rem',
    padding: '.75rem 1.5rem',
    border: '1px solid #eee',
    background: 'dimgray',
    color: 'white',
    fontSize: '1rem',
    borderRadius: '.25rem'
}

export default ShowComponents
