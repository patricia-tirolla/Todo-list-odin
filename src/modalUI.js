import { createProject, createTodo} from ".";
import { displayProjectCard } from "./projectsUI";

// ---------------- Todo modal and buttons
export function showNewTodoModal() {

    const addtodoButton = document.querySelector(".new-todo-button");
    const modal = document.getElementById("todo-dialog");
    addtodoButton.addEventListener("click", (e) => {
        modal.show();
    })
};
export function closeNewTodoModal() {

    const addtodoButton = document.getElementById("cancel-button");
    const modal = document.getElementById("todo-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
};
export function addNewTodoButton() {
    const addNewTodoButton = document.getElementById("add-todo-button");
    const modal = document.getElementById("todo-dialog");
    addNewTodoButton.addEventListener("click", (e) => {
        e.preventDefault();
        createTodo();
        displayProjectCard();
        modal.close();
    })
}

// ---------------- Project modal and buttons
export function showNewProjectModal() {
    const addtodoButton = document.querySelector(".new-project-button");
    const modal = document.getElementById("project-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
}
export function closeNewProjectModal() {
    const addtodoButton = document.getElementById("cancel-project-button");
    const modal = document.getElementById("project-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
}
export function addNewProjectButton() {
    const addNewProjectButton = document.getElementById("add-project-button")
    const modal = document.getElementById("project-dialog");
    addNewProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        createProject();
        displayProjectCard();
        modal.close();
    })
}

// ---------------- Welcome modal and buttons
export function showWelcomeModal() {
    const addtodoButton = document.querySelector(".welcome-button");
    const modal = document.getElementById("welcome-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
}
export function closeWelcomeModal() {
    const addtodoButton = document.getElementById("close-welcome-button");
    const modal = document.getElementById("welcome-dialog");
    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
}