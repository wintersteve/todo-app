import React from 'react';
import Note from './Note';


function Header(props) {  

    let h1Style = '';
    if (props.showComponents === true) {
        h1Style = {
            borderColor:  props.showComponents ? 'rgb(139, 195, 74)' : 'transparent',
        }
    }

    return  (
        <header style={headerStyle}>
            <h1 style={Object.assign({padding: '0 0.5rem', border: '2px solid', borderRadius: '0.25rem', borderColor: 'transparent'}, h1Style)}>TO DO APP</h1>    
            <Note showComponents={props.showComponents} color="#8BC34A" text="<Header />" />
        </header>
    )
}

const headerStyle = {
    position: 'relative',
    fontSize: '4rem',
    fontWeight: 'bold'
}

export default Header;