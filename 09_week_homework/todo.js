async function getTodos(){
    let getList = await fetch("http://localhost:3000/todos", {method: 'GET'})
    return getList.json();
}

// getTodos();
// console.log(getTodos())

function createToDo(text){
    let toDoContainer = document.getElementById("todo-container")
    let todoItem = document.createElement('div')
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'x'
    let todoText = document.createElement('h2')
    todoText.innerText = text;
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn)
    toDoContainer.appendChild(todoItem);
    return toDoContainer
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', function(){
    let inputText = document.getElementById("input-text");
    createToDo(inputText.value);
  
})

const createToDos = (toDos) => {
    let toDoContainer = document.getElementById("todo-container")
    let toDoItem = toDos.map((toDo) => createToDo(toDo.text))
    // toDoContainer.appendChild(...toDoItem)
}

async function displayTodos(toDos){
  let todoList = await getTodos();
  let todoHtml = createToDos(todoList);
}
displayTodos();
