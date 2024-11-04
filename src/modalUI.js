import { displayProjectAndTodoCards, createProject, createTodo} from "./projectsUI";

// ---------------- Todo modal and buttons
export function showNewTodoModal() {

    const addtodoButton = document.querySelector(".new-todo-button");
    const modal = document.getElementById("todo-dialog");
    addtodoButton.addEventListener("click", (e) => {
        modal.show();
    })
};
showNewTodoModal();
export function closeNewTodoModal() {

    const addtodoButton = document.getElementById("cancel-button");
    const modal = document.getElementById("todo-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
};
closeNewTodoModal()
export function addNewTodoButton() {
    const addNewTodoButton = document.getElementById("add-todo-button");
    const modal = document.getElementById("todo-dialog");
    addNewTodoButton.addEventListener("click", (e) => {
        e.preventDefault();
        createTodo();
        displayProjectAndTodoCards();
        modal.close();
    })
}
addNewTodoButton();

// ---------------- Project modal and buttons
export function showNewProjectModal() {
    const addtodoButton = document.querySelector(".new-project-button");
    const modal = document.getElementById("project-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
};
showNewProjectModal();
export function closeNewProjectModal() {
    const addtodoButton = document.getElementById("cancel-project-button");
    const modal = document.getElementById("project-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
};
closeNewProjectModal();
export function addNewProjectButton() {
    const addNewProjectButton = document.getElementById("add-project-button")
    const modal = document.getElementById("project-dialog");
    addNewProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        createProject();
        displayProjectAndTodoCards();
        modal.close();
    })
};
addNewProjectButton();

// ---------------- Welcome modal and buttons
export function showWelcomeModal() {
    const addtodoButton = document.querySelector(".welcome-button");
    const modal = document.getElementById("welcome-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
};
showWelcomeModal();
export function closeWelcomeModal() {
    const addtodoButton = document.getElementById("close-welcome-button");
    const modal = document.getElementById("welcome-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
};
closeWelcomeModal();