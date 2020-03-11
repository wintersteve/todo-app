import React from 'react';
import Note from './Note';


function Header(props) {  
    return  (
        <header style={headerStyle}>
            <h1>TO DO APP</h1>    
            <Note showComponents={props.showComponents} color="#8BC34A" />
        </header>
    )
}

const headerStyle = {
    position: 'relative',
    fontSize: '4rem',
    fontWeight: 'bold'
}

export default Header;