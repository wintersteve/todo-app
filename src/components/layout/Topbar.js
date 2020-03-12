import React from 'react';
import GithubLink from './GithubLink';
import ShowComponents from './ShowComponents';
import ShowComponentClass from './ShowComponentClass';
import ShowStateBtn from './ShowStateBtn';

export default function Topbar(props) {
    return (
        <div style={divStyle}>
            <ShowComponents toggleComponents={props.toggleComponents} showComponents={props.showComponents} />
            <ShowComponentClass toggleComponentClass={props.toggleComponentClass} />
            <ShowStateBtn toggleExampleState={props.toggleExampleState} />
            <GithubLink />
        </div>
    )
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 1rem'
}