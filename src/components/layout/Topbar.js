import React from 'react';
import GithubLink from './GithubLink';
import ShowComponents from './ShowComponents';
import ShowComponentClass from './ShowComponentClass';

export default function Topbar(props) {
    return (
        <div style={divStyle}>
            <ShowComponents toggleComponents={props.toggleComponents} showComponents={props.showComponents} />
            <ShowComponentClass toggleComponentClass={props.toggleComponentClass} />
            <GithubLink />
        </div>
    )
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 1rem'
}