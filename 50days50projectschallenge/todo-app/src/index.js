import "./styles/main.css";

const todoInput = document.querySelector(".new-todo");
const todoContainer = document.querySelector(".todosContainer");
let todoItemsCount = 0;

const filterTodos = ["All", "Completed", "Active"];

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

function createTodoListContainer() {
  const todoList = document.createElement("section");
  todoList.className = "main";

  const todoItems = document.createElement("ul");
  todoItems.className = "todo-list";
  todoList.appendChild(todoItems);
  todoContainer.appendChild(todoList);

  todoList.addEventListener("click", completeTodos);
}

function applyFilters(e) {
  const todoList = document.querySelector(".todo-list").childNodes;
  todoList.forEach((todo) => {
    if (e.target.className === "All") {
      todo.style.display = "flex";
    } else if (e.target.className === "Completed") {
      if (todo.classList.contains("todoItem__completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (e.target.className === "Active") {
      if (!todo.classList.contains("todoItem__completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
  });
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  const itemCount = document.createElement("span");
  itemCount.className = "todo-count";

  const filters = document.createElement("ul");
  filters.addEventListener("click", applyFilters);
  filterTodos.map((filter) => {
    const filterItem = document.createElement("li");
    filterItem.className = filter;
    filterItem.innerText = filter;
    filters.appendChild(filterItem);
  });

  footer.appendChild(itemCount);
  footer.appendChild(filters);
  todoContainer.appendChild(footer);
}

function createTodoItem(value) {
  const todoItem = document.createElement("li");
  todoItem.className = "todoItem";
  const delButton = document.createElement("button");
  todoItem.innerHTML = value;
  delButton.innerText = "X";
  delButton.classList.add("todoItem__delete");

  todoItem.appendChild(delButton);
  return todoItem;
}

function createFilters() {
  const itemCount = todoContainer.querySelector(".footer");
  const spanItemCount = itemCount.querySelector(".todo-count");
  spanItemCount.innerText = `${todoItemsCount} Items`;
}

function addToDo(todo) {
  todoInput.value = "";
  todoItemsCount++;
  createFilters();
  const todoItem = createTodoItem(todo);

  const todoSection = document.querySelector(".main");

  const list = todoSection.querySelector(".todo-list");

  list.appendChild(todoItem);
  todoSection.appendChild(list);
  todoContainer.append(todoSection);
}

todoInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  const inputVal = e.target.value;
  if (e.key === "Enter") {
    // list container
    if (inputVal) {
      if (!todoContainer.querySelector(".main")) {
        createTodoListContainer();
      }
      if (!todoContainer.querySelector(".footer")) {
        createFooter();
      }
      addToDo(inputVal);
    }
  }
});
