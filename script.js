
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");


if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}


if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
}


addTodoButton.addEventListener("click", () => {
    if (todoInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> <span>${todoInput.value}</span> <button class="delete">❌</button>`;
        todoList.appendChild(li);
        todoInput.value = "";
    }
});

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});