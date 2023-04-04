import "./styles/main.css";

const todoInput = document.querySelector(".new-todo");
const todoContainer = document.querySelector(".todosContainer");
let todoItemsCount = 0;

const filterTodos = ["All", "Completed", "Active"];

function completeAndDeleteTodos(e) {
  const todoItem = e.target;
  // complete a todo
  if (todoItem.classList.contains("todo-toggle")) {
    const completeItem = todoItem.checked;
    if (completeItem) {
      todoItem.parentNode.classList.add("todoItem__completed");
    } else {
      todoItem.parentNode.classList.remove("todoItem__completed");
    }
  }
  //delete
  if (todoItem.classList.contains("todoItem__delete")) {
    let parentNode = todoItem.parentNode.parentNode;
    parentNode.remove();
  }
}

function editTodos(e) {
  console.log(e.target);
  const parent = e.target.parentNode.parentNode;
  const value = e.target.innerText;
  const targetParent = e.target.parentNode;
  parent.classList.add("editTodo");
  const viewContent = parent.querySelector(".todo-view");
  viewContent.style.display = "none";
  const editTodo = document.createElement("input");
  editTodo.className = "edit_mode";
  editTodo.value = value;
  editTodo.addEventListener("keyup", function (e) {
    e.preventDefault();
    const editedValue = e.target.value;
    if (e.key === "Enter") {
      const input = parent.querySelector(".edit_mode");
      input.remove();
      const removeLabel = targetParent.querySelector(".todo-value");
      removeLabel.innerText = editedValue;
      targetParent.style.display = "flex";
      parent.classList.remove("editTodo");
    }
  });
  parent.appendChild(editTodo);
}

function createTodoListContainer() {
  const todoList = document.createElement("section");
  todoList.className = "main";

  const todoItems = document.createElement("ul");
  todoItems.className = "todo-list";
  todoList.appendChild(todoItems);
  todoContainer.appendChild(todoList);

  todoItems.addEventListener("click", completeAndDeleteTodos);
  todoList.addEventListener("dblclick", editTodos);
}

function applyFilters(e) {
  const todoList = document.querySelector(".todo-list").childNodes;
  todoList.forEach((todo) => {
    if (e.target.className === "All") {
      todo.style.removeProperty("display");
    } else if (e.target.className === "Completed") {
      if (
        todo
          .querySelector(".todo-view")
          .classList.contains("todoItem__completed")
      ) {
        todo.querySelector(".todo-view").style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (e.target.className === "Active") {
      if (
        !todo
          .querySelector(".todo-view")
          .classList.contains("todoItem__completed")
      ) {
        todo.style.removeProperty("display");
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

  filterTodos.map((filter) => {
    const filterItem = document.createElement("li");
    filterItem.className = filter;
    filterItem.innerText = filter;
    filters.appendChild(filterItem);
  });
  filters.addEventListener("click", applyFilters);

  footer.appendChild(itemCount);
  footer.appendChild(filters);
  todoContainer.appendChild(footer);
}

function createTodoItem(value) {
  const todoItem = document.createElement("li");
  todoItem.className = "todoItem";
  const todoContent = document.createElement("div");
  todoContent.className = "todo-view";
  const todoComplete = document.createElement("input");
  todoComplete.className = "todo-toggle";
  todoComplete.type = "checkbox";

  const todoValue = document.createElement("label");
  todoValue.className = "todo-value";
  todoValue.innerText = value;
  const delButton = document.createElement("button");
  delButton.innerText = "X";
  delButton.classList.add("todoItem__delete");
  todoContent.appendChild(todoComplete);
  todoContent.appendChild(todoValue);
  todoContent.appendChild(delButton);
  todoItem.appendChild(todoContent);

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
