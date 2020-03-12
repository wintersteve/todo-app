import React from 'react';
import GithubLink from './GithubLink';
import ShowComponents from './ShowComponents';

export default function Topbar(props) {
    return (
        <div style={divStyle}>
            <ShowComponents toggleComponents={props.toggleComponents} showComponents={props.showComponents} />
            <GithubLink />
        </div>
    )
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 1rem'
}