
async function getTodos() {
    let getList = await fetch("http://localhost:3000/todos", { method: 'GET' })
    return getList.json();
}

getTodos()
    .then((toDos) => {
        console.log(toDos)
    })

async function displayTodos() {
    let toDoContainer = document.getElementById('todo-container');
    let toDoList = await getTodos();

    toDoList.map((toDo) =>
        toDoContainer.append(createToDo(toDo)))

}

displayTodos();


function createToDo(toDoItem) {

    let todoItem = document.createElement('div')
    todoItem.setAttribute("id", toDoItem.id);
    todoItem.innerHTML = `
     <h2>${toDoItem.text}</h2>
     <input type="checkbox" id="checkbox">
     <button onClick="deleteToDo(${toDoItem.id})"> x </button>
    `
    let checkbox = todoItem.querySelector('#checkbox')
    checkbox.addEventListener('change', function () {
        console.log("merge")
        toDoItem.checked = !toDoItem.checked;
        console.log(toDoItem)
        updateTodo(toDoItem);
    })
    return todoItem;
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', async function () {
    let toDoContainer = document.getElementById('todo-container')
    let inputText = document.getElementById("input-text");
    let todo = await addToDo(inputText.value);
    toDoContainer.appendChild(createToDo(todo));

})

async function addToDo(text) {
    let newToDo = { text: text }
    let response = await fetch('http://localhost:3000/todos',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToDo)
        })
    let theToDo = await response.json();
    return theToDo;
}

async function updateTodo(todo) {
    let response = await fetch('http://localhost:3000/todos/' + todo.id,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
    let theToDo = await response.json();
    return theToDo;
}


async function deleteToDo(id) {
    let response = await fetch('http://localhost:3000/todos/' + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }

        })
    let deletedToDo = await response.json();
    let toDoParent = document.getElementById("todo-container")
    let toDoRemoved = document.getElementById(deletedToDo.id)
    toDoParent.removeChild(toDoRemoved)
}

