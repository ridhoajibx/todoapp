// Collect UI element for todos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


// ini adalah event untuk menambahkan todo
todoForm.addEventListener("submit", addTodo);

// ini adalah event untuk meyelesaikan todo
todoList.addEventListener("click", isComplete);

// ini adalah event untuk delete todo
todoList.addEventListener("click", deleteTodo);


// Reuseable codes w/ funtion (refactor)
function createTodosElement(value) {
    //create li element (First child)
    const li = document.createElement("li");
    li.className = "todo-text";

    //create  elemen P (first child from li)
    const p = document.createElement("p");
    p.className = "todo-item"
    p.innerHTML = (todoInput.value)

    li.appendChild(p);

    //create  anchor delete (second child from li)
    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-todo add-btn main-red-color";
    a.innerHTML = "Delete";
    li.appendChild(a);

    // add elemen li to todoList element
    todoList.appendChild(li);
}

function addTodo(e) {
    e.preventDefault();   
    if (todoInput.value) {
        createTodosElement(todoInput.value);

        todoInput.value = "";
    } else {
        alert("Todo cannot empty!");
    }
}

function isComplete(e) {
    const checked = e.target.classList.toggle('checked');
    e.target.tagName === 'P' ? checked: null;
}

function deleteTodo(e) {
    e.preventDefault();
    const clearTodo = e.target.classList.contains("delete-todo");
    // conditional for delete todo
    if (clearTodo) {
        // show alert
        if (confirm(`Are you sure to delete?`)) {
            const parent = e.target.parentElement;
            parent.remove();
        }
    }
}