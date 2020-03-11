import React from 'react'

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
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add a new todo…" 
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
                />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
    margin: '1rem 0 2rem',
}

const inputStyle = {
    width: '100%',
    fontSize: '1.5rem',
    borderBottom: '1px solid #eee',
    marginRight: '2rem',
    padding: '.5rem',
    fontWeight: 'bold'
}

const submitBtnStyle = {
    marginLeft: 'auto',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    background: 'var(--primary)',
    padding: '0 1rem',
    color: 'white',
    borderRadius: '.25rem'
}

export default AddTodo

