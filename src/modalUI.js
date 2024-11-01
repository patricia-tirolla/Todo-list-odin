import { createNewTodoObject } from "./todo";
import { addProjectToList } from "./projects";
import { createTodo, createTodoCard } from ".";

// Show Todo modal button
export function showNewTodoModal() {

    const addtodoButton = document.getElementById("new-todo-button");
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
        createTodoCard();
        modal.close();
    })
}

// Show Project modal button
export function showNewProjectModal() {
    const addtodoButton = document.getElementById("add-project-button");
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
    const addNewProjectButton = docu
    const modal = document.getElementById("project-dialog");ment.getElementById("add-project-button");
    addNewProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        addProjectToList();
        modal.close();
        // reset (parent element?)
    })
}