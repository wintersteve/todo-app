import React, { Component } from 'react';

export class ExampleComponentClass extends Component {
    render() {
        return (
            <div style={{ maxWidth: '42rem', margin: '0 auto', backgroundColor: '#f7f7f7', padding: '1.5rem' }}>
                            
                <p> { 'class'} <span style={{ color: 'var(--green)' }}>Header</span> {'extends React.Component {' } </p>
                    <p style={ { marginLeft: '2.5rem', color: 'var(--primary)' } }> { 'render() {' } </p>
                        <p style={ { marginLeft: '5rem' } }> { 'return (' } </p>
                            <p style={ { marginLeft: '7.5rem', color: 'var(--red)' } }>{ '<header>' }</p>
                                <p style={ { marginLeft: '10rem', color: 'var(--red)' } }>{' <h1 style={ h1Style }>' }</p>
                                    <p style={ { marginLeft: '12.5rem', color: 'var(--red)' } }>TO DO APP</p>
                                <p style={ { marginLeft: '10rem', color: 'var(--red)' } }>{ '</h1>' }</p>
                            <p style={ { marginLeft: '7.5rem', color: 'var(--red)' } }>{ '</header>'}</p>
                        <p style={ { marginLeft: '5rem' } }>)</p>
                    <p style={ { marginLeft: '2.5rem' } }>}</p>
                <p>}</p>

            </div>
        )
    }
}

export default ExampleComponentClass
