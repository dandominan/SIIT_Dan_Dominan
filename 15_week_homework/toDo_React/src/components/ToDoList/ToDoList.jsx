import React from 'react'
import ToDoItem from '../ToDoItem'

class ToDoList extends React.Component {

    render() {
        return this.props.todos.map((todo) => (
            <ToDoItem 
            key={todo.id} 
            todo={todo}
            markCompleted = {this.props.markCompleted}
            deleteToDo = {this.props.deleteToDo} />
        ));
    }
}

export default ToDoList;
