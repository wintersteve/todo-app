import React from 'react';
import styles from '../css/AddTodo.module.css';
import Note from './layout/Note';

export class AddTodo extends React.Component {

    state = {
        title: '',
        hovered: false
    }

    getImgStyle = () => {
        return {
            position: 'relative',
            right: '1.3rem',
            transform: this.state.hovered === true ? 'translateY(-.15rem)' : '',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
        }
    }

    onChange = (e) => {
        this.setState({ title: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    toggleHover = () => {
        this.state.hovered === false ? this.setState( { hovered: true } ) : this.setState( { hovered: false } );
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ borderColor: this.props.showComponents === true ? 'red' : 'transparent' }} className={styles.form}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="ADD A NEW TODO…" 
                    style={inputStyle}
                    value={this.state.title}
                    onChange={this.onChange}
                    autoComplete="off"
                    required
                />

                <img 
                    src="./plus.svg" 
                    width="30" 
                    onClick={this.onSubmit}  
                    onMouseEnter={ this.toggleHover }
                    onMouseLeave={ this.toggleHover }
                    alt="Add button" 
                    style={this.getImgStyle()}
                >
                </img>
                <Note color="#F44336" showComponents={this.props.showComponents} text="<AddTodo />" /> 
            </form>
        
        )
    }
}

const inputStyle = {
    width: '100%',
    fontSize: '1.2rem',
    borderBottom: '1px solid #eee',
    marginRight: '2rem',
    marginLeft: '.25rem',
    padding: '.5rem',
    fontWeight: 'bold',
    letterSpacing: '0.075rem'
}

export default AddTodo

