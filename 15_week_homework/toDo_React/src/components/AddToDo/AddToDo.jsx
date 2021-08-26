import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoServer(this.state.title);
        this.setState({title: '' });
    }
    onChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{display: 'flex'}}>
                <input 
                className = "input"
                type="text" 
                name = "title" 
                placeholder = "Add ToDo .."
                value = {this.state.title}
                onChange = {this.onChange}
             />
             <input 
             type="submit" 
             value="Submit" 
             className ="btn"
            //  style = {{flex: '1'}}
            />
            </form>
        )
    }
}

export default AddToDo
