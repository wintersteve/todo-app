import React, { Component } from 'react';

export class ShowComponents extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggleComponents}>
                    { this.props.showComponents ? 'Hide components' : 'Show components' }
                </button>
            </div>
        )
    }
}

export default ShowComponents
