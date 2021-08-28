import React, { useState } from 'react'
import Header from './components/Header/header'
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import ToDoList from './components/ToDoList/ToDoList'
import axios from 'axios'




class App extends React.Component {

  state = {
    toDos:[]
  }

  componentDidMount() {
    async function getTodos() {
      let getList = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3", { method: 'GET' })
      return getList.json();
    }

    getTodos()
      .then((toDos) => {
        console.log(toDos)
        this.setState({
          toDos: toDos
        })
      })
      .catch((error) => {
        console.log('err')
      })
  }

//Mark Completed



  markCompleted = (id) => {
//     axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`)
// .then(response => 
    this.setState({toDos: this.state.toDos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
   
  }

  //Delete Todo

  deleteToDo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.setState({ toDos: [...this.state.toDos.filter(todo => todo.id !== id)] }));
  };

// Add Todo

    addTodoServer = (title) => {
      const response = fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title})
      })
      .then(response => response.json())
      .then(todo => this.setState({toDos: [...this.state.toDos, todo]}))
    }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addTodoServer = {this.addTodoServer} />
          <ToDoList
            todos={this.state.toDos}
            markCompleted={this.markCompleted}
            deleteToDo={this.deleteToDo} />
        </div>
      </div>
    )
  }

}

export default App
