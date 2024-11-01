import { showNewTodoModal, closeNewTodoModal, showNewProjectModal, closeNewProjectModal, addNewTodoButton, addNewProjectButton} from "./modalUI.js";
import { myProjects, addNewProjectToList, addTodoToProject } from "./projects.js";
import { Todo } from "./todo";


// Modal functions
showNewTodoModal();
closeNewTodoModal();
showNewProjectModal();
closeNewProjectModal();
addNewTodoButton();
addNewProjectButton();

// Create todo card
export function createTodo() {
    let todoTitle = document.getElementById("todo-title");
    let todoDescription = document.getElementById("todo-description");
    let todoDueDate = document.getElementById("todo-due-date");
    let todoPriority = document.getElementById("todo-priority");
    let options = document.getElementById("options")

    addTodoToProject(options.value, new Todo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value))
}

// Create project card
export function createProject() {
    let projectTitle = document.getElementById("project-title").value;
    addNewProjectToList(projectTitle);
}

function getProjectsFromLocalStorage() {
    const projects = localStorage.getItem("projects");
    if (projects === null) {
        return [];
    }
    return JSON.parse(projects);
}

// Display the project card
export function displayProjectCard() {
    let options = document.getElementById("options");
    let projectsContainer = document.getElementById("all-projects-container");
    projectsContainer.innerHTML = "";
    options.innerHTML = "";

    getProjectsFromLocalStorage().forEach((project, index) => {
        let optionElement = document.createElement("option");
        optionElement.value = index;
        optionElement.textContent = project.title;
        options.appendChild(optionElement);

        const projectTemplate = document.getElementById("project-card-template");
        let clone = projectTemplate.content.cloneNode(true);

        clone.querySelector("h2").setAttribute("data-index", index);
        clone.querySelector("h2").textContent = project.title;
        let todosContainer = clone.querySelector(".todos-list");

        project.todos.forEach((todo, index) => {
                let cardTemplate = document.getElementById("todo-card-template");
                let clone = cardTemplate.content.cloneNode(true);
        
                clone.querySelector("h3").setAttribute("data-index", index);
                clone.querySelector(".todo-title").textContent = todo.title;
                clone.querySelector(".todo-description").textContent = todo.description;
                clone.querySelector(".todo-due-date").textContent = todo.dueDate;
                clone.querySelector(".todo-priority").textContent = todo.priority;
                // clone.querySelector("#priority-high").checked = todo.priority.high ;
                // Put properties inside the priority and select it when checked
        
                todosContainer.appendChild(clone);
        })

        projectsContainer.appendChild(clone);
    })
}
if (localStorage.getItem("projects") === null) {
    localStorage.setItem("projects", JSON.stringify(myProjects));
}
displayProjectCard();
