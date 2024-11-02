import { myProjects, deleteTodo, deleteProject, moveTodoBetweenProjects } from "./projects";

export function doneStatus(todo, e) {
    todo.done = e.target.checked;
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

// ----------------------- Manipulate Projects and Todo Cards
// ----------------------- Create, delete and move them on the display
export function displayProjectCard() {

    // ----------------------- Display the projects
    let options = document.getElementById("options");
    let projectsContainer = document.getElementById("all-projects-container");
    projectsContainer.innerHTML = "";
    options.innerHTML = "";


    let dragged = null;
    getProjectsFromLocalStorage().forEach((project, projectIndex) => {
        let optionElement = document.createElement("option");
        optionElement.value = projectIndex;
        optionElement.textContent = project.title;
        options.appendChild(optionElement);

        const projectTemplate = document.getElementById("project-card-template");
        let projectClone = projectTemplate.content.cloneNode(true);

        projectClone.querySelector(".project-card").setAttribute("data-index", projectIndex);
        projectClone.querySelector("h2").textContent = project.title;
        projectClone.querySelector(".project-delete-button").onclick = () => {
            if (projectIndex != 0) {
                deleteProject(projectIndex);
                displayProjectCard();
            }
        }
        // allows the todos to drag over the projects
        projectClone.querySelector(".project-card").addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        // select the project to get the todo dragged
        projectClone.querySelector(".project-card").addEventListener("drop", (e) => {
            e.preventDefault();
            let fromIndex = dragged.closest(".project-card").dataset.index;
            let todoIndex = dragged.dataset.todoIndex;

            moveTodoBetweenProjects(todoIndex, fromIndex, projectIndex);
            displayProjectCard();
        })
       

        // ----------------------- Display the todos
        let todosContainer = projectClone.querySelector(".todos-list");
        project.todos.forEach((todo, todoIndex) => {
            let cardTemplate = document.getElementById("todo-card-template");
            let todoClone = cardTemplate.content.cloneNode(true);

            todoClone.querySelector(".todo-card").setAttribute("data-todo-index", todoIndex);
            todoClone.querySelector(".todo-title").textContent = todo.title;
            todoClone.querySelector(".todo-description").textContent = todo.description;
            todoClone.querySelector(".todo-due-date").textContent = `Due date: ${todo.dueDate}`;
            todoClone.querySelector(".todo-priority").textContent = `Priority: ${todo.priority}`;
            todoClone.querySelector(".done").checked = todo.done;
            todoClone.querySelector(".done").onchange = (e) => {
                doneStatus(todo, e);
                displayProjectCard();
            }
            todoClone.querySelector(".todo-delete-button").onclick = () => {
                deleteTodo(projectIndex, todoIndex);
                displayProjectCard();
            }
            // target the todo card to drag
            todoClone.querySelector(".todo-card").addEventListener("dragstart", (e) => {
                dragged = e.target;
            });
            let card = todoClone.querySelector(".todo-card");
            card.draggable = true;

            // ----------------------- Append
            todosContainer.appendChild(todoClone);
        })
        projectsContainer.appendChild(projectClone);
    })
}

export function getProjectsFromLocalStorage() {
    const projects = localStorage.getItem("projects");
    if (projects === null) {
        return [];
    }
    return JSON.parse(projects);
}