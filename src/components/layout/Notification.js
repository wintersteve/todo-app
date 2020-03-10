import React from 'react'

export class Notification extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h2>No tasks available…</h2>
            </div>
        )
    }
}

const divStyle = {
    padding: '1rem'
}

export default Notification
