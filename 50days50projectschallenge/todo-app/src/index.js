import "./styles/main.css";

const todoInput = document.querySelector(".new-todo");
const todoContainer = document.querySelector(".todosContainer");

todoInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  const inputVal = e.target.value;
  if (e.key === "Enter") {
    if (!todoContainer.querySelector(".main")) {
      const todoList = document.createElement("section");
      todoList.className = "main";

      const todoItems = document.createElement("ul");
      todoItems.className = "todo-list";
      todoList.appendChild(todoItems);
      todoContainer.appendChild(todoList);

      todoList.addEventListener("click", completeTodos);
    }
    if (inputVal) {
      addToDo(inputVal);
    }
  }
});

function addToDo(todo) {
  todoInput.value = "";

  const todoItem = document.createElement("li");
  todoItem.classList.add("todoItem");
  const delButton = document.createElement("button");
  todoItem.innerHTML = todo;
  delButton.innerText = "X";
  delButton.classList.add("todoItem__delete");

  todoItem.appendChild(delButton);

  const todoSection = document.querySelector(".main");

  const list = todoSection.querySelector(".todo-list");

  list.appendChild(todoItem);
  todoSection.appendChild(list);
  todoContainer.appendChild(todoSection);
}

function completeTodos(e) {
  const todoItem = e.target;

  // complete a todo
  todoItem.classList.toggle("todoItem__completed");
  // delete a todo
  if (todoItem.classList.contains("todoItem__delete")) {
    const todo = todoItem.parentElement;

    todo.remove();
  }
}
