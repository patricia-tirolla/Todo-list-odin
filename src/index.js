import { showNewTodoModal, closeNewTodoModal, showNewProjectModal, closeNewProjectModal, addNewTodoButton, addNewProjectButton} from "./modalUI.js";

import { myProjects, projectDefault, addProjectToList, deleteProject } from "./projects.js";
import { createNewTodoObject, deleteTodo, definePriority } from "./todo";


// Modal functions
showNewTodoModal();
closeNewTodoModal();
showNewProjectModal();
closeNewProjectModal();
addNewTodoButton();
addNewProjectButton();

// Create todo card
export function createTodo(title, description, dueDate, priority) {
    let todoTitle = document.getElementById("todo-title");
    let todoDescription = document.getElementById("todo-description");
    let todoDueDate = document.getElementById("todo-due-date");
    let todoPriority = document.getElementById("todo-priority");

    createNewTodoObject(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
}

// Display the todos in a card
export function createTodoCard() {
    let displayClean = document.getElementById("default-projects-display");
    displayClean.textContent = "";

    projectDefault.todos.forEach((todo, index) => {
        const cardTemplate = document.getElementById("todo-card-template");
        let clone = cardTemplate.content.cloneNode(true);

        clone.querySelector("h3").setAttribute("data-index", index);
        clone.querySelector(".todo-title").textContent = todo.title;
        clone.querySelector(".todo-description").textContent = todo.description;
        clone.querySelector(".todo-due-date").textContent = todo.dueDate;
        clone.querySelector(".todo-priority").textContent = todo.priority;
        // clone.querySelector("#priority-high").checked = todo.priority.high ;
        // Put properties inside the priority and select it when checked

        const display = document.getElementById("default-projects-display");
        display.appendChild(clone);
    });
}




