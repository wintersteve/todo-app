import React from 'react';

function Header() {
    return  (
        <header style={headerStyle}>
            <h1>Todo</h1>
        </header>
    )
}

const headerStyle = {
    fontSize: '4rem',
    fontWeight: 'bold'
}

export default Header;