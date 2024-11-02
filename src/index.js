
import "./style.css"
import { showNewTodoModal, closeNewTodoModal, showNewProjectModal, closeNewProjectModal, addNewTodoButton, addNewProjectButton, showWelcomeModal, closeWelcomeModal } from "./modalUI.js";
import { myProjects, addNewProjectToList, addTodoToProject } from "./projects.js";
import { Todo } from "./todo";
import { displayProjectCard, dragAndDrop, getProjectsFromLocalStorage } from "./projectsUI.js";

// ----------------------- Modal functions
showNewTodoModal();
closeNewTodoModal();
showNewProjectModal();
closeNewProjectModal();
addNewTodoButton();
addNewProjectButton();
showWelcomeModal();
closeWelcomeModal();

// ----------------------- Project UI functions
dragAndDrop();
getProjectsFromLocalStorage();
displayProjectCard();

// ----------------------- UI Interactions
export function createTodo() {
    let todoTitle = document.getElementById("todo-title");
    let todoDescription = document.getElementById("todo-description");
    let todoDueDate = document.getElementById("todo-due-date");
    let todoPriority = document.getElementById("todo-priority");
    let options = document.getElementById("options")

    addTodoToProject(options.value, new Todo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value, false))
}

export function createProject() {
    let projectTitle = document.getElementById("project-title").value;
    addNewProjectToList(projectTitle);
}

// ----------------------- Sinc the storage with the JS
let projectsLocalStorage = localStorage.getItem("projects");
if (projectsLocalStorage === null) {
    localStorage.setItem("projects", JSON.stringify(myProjects));
} else {
    let projectList = JSON.parse(projectsLocalStorage);
    myProjects.splice(0, 1);
    projectList.forEach((project) => {
        myProjects.push(project);
    })
}


