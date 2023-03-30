import "./styles/main.css";

const todoInput = document.querySelector(".todoInput");
const todosList = document.querySelector(".todoList");

todoInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  const inputVal = e.target.value;
  if (e.key === "Enter") {
    if (inputVal) {
      addToDo(inputVal);
    }
  }
});
todosList.addEventListener("click", completeTodos);

function addToDo(todo) {
  todoInput.value = "";

  const todoItem = document.createElement("li");
  todoItem.classList.add("todoItem");
  const button = document.createElement("button");
  todoItem.innerHTML = todo;
  button.innerText = "X";
  button.classList.add("todoItem__delete");
  todoItem.appendChild(button);
  const ul = document.querySelector("ul");
  if (todosList.contains(ul)) {
    ul.appendChild(todoItem);
  } else {
    const list = document.createElement("ul");
    list.appendChild(todoItem);
    todosList.appendChild(list);
  }
}

function completeTodos(e) {
  console.log(e.target);
  const todoItem = e.target;

  // complete a todo
  todoItem.classList.toggle("todoItem__completed");
  // delete a todo
  if (todoItem.classList.contains("todoItem__delete")) {
    const todo = todoItem.parentElement;
    console.log(todo);
    todo.remove();
  }
}
