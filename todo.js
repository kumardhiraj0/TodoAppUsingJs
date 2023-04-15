const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.innerText = todo;
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => {
      editTodoItem(index);
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodoItem(index);
    });
    todoItem.appendChild(todoText);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
}

function addTodoItem() {
  const todoText = newTodoInput.value;
  if (todoText.trim() !== '') {
    todos.push(todoText);
    newTodoInput.value = '';
    renderTodos();
  }
}

function deleteTodoItem(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodoItem(index) {
  const newTodoText = prompt('Enter new todo text', todos[index]);
  if (newTodoText.trim() !== '') {
    todos[index] = newTodoText;
    renderTodos();
  }
}

addTodoButton.addEventListener('click', addTodoItem);
