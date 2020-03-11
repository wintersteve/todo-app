import React from 'react';
import styles from '../css/AddTodo.module.css';

export class AddTodo extends React.Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ title: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle} className={styles.form}>
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

                <input 
                    type="submit" 
                    value="Submit"
                    style={submitBtnStyle}
                    className={styles.btn}
                />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
    margin: '1rem 0 4rem',
    overflow: 'hidden'
}

const inputStyle = {
    width: '100%',
    fontSize: '1.2rem',
    borderBottom: '1px solid #eee',
    marginRight: '2rem',
    padding: '.5rem',
    fontWeight: 'bold'
}

const submitBtnStyle = {
    marginLeft: 'auto',
    border: '2px solid var(--primary)',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '0 2rem',
    color: 'var(--primary)',
    background: 'white',
    borderRadius: '.25rem',
    outline: 'none'
}

export default AddTodo

