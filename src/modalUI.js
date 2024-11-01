import { createProject, createTodo, displayProjectCard, displayTodoCardDefault } from ".";

// Show Todo modal button
export function showNewTodoModal() {

    const addtodoButton = document.querySelector(".new-todo-button");
    const modal = document.getElementById("todo-dialog");

    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
};

// Close todo modal button
export function closeNewTodoModal() {

    const addtodoButton = document.getElementById("cancel-button");
    const modal = document.getElementById("todo-dialog");

    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
};

// Add New Todo button
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

// Show Project modal button
export function showNewProjectModal() {
    const addtodoButton = document.getElementById("new-project-button");
    const modal = document.getElementById("project-dialog");

    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
}

// Close Project modal button
export function closeNewProjectModal() {
    const addtodoButton = document.getElementById("cancel-project-button");
    const modal = document.getElementById("project-dialog");

    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
}

// Add New Project button
export function addNewProjectButton() {
    const addNewProjectButton = document.getElementById("add-project-button")
    const modal = document.getElementById("project-dialog");
    addNewProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        createProject();
        displayProjectCard();
        modal.close();
        // reset (parent element?)
    })
}