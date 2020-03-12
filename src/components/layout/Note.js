import React, { Component } from 'react'

export class Note extends Component {

    getStyle = () => {
        return {
            position: 'absolute',
            left: '-12.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: this.props.color
        }
    }

    render() {

        if (this.props.showComponents) {
            return (
                <div>
                    <small style={this.getStyle()}>
                        {this.props.text}
                    </small>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Note

