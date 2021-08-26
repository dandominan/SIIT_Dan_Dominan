import React, { Component } from 'react'

export class ToDoItem extends Component {

    
    getStyle = () => {
        return {
            background: 'grey',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange = {this.props.markCompleted.bind(this, id)}/>
                    {title} 
                    <button onClick = {this.props.deleteToDo.bind(this, id)} style = {btnStyle}> x </button>
                </p>
            </div>
        )
    }
}

const btnStyle = {

    borderRadius: '50%',
    border: 'none',
    diplay: 'flex',
    justifyContent: 'space-around',
    
    // borderRadius: '50%',
    // outerHeight:'4px',
    // display: 'inline-block',
    // border: 'none',
    // background: '#555',
    // color:'#fff',
    // padding:'7px 20px' ,
}
export default ToDoItem
