import { myProjects, deleteTodo, deleteProject } from "./projects";

export function doneStatus(todo, e) {
    todo.done = e.target.checked;
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

// ----------------------- Display the project card
export function displayProjectCard() {
    let options = document.getElementById("options");
    let projectsContainer = document.getElementById("all-projects-container");
    projectsContainer.innerHTML = "";
    options.innerHTML = "";

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

        // ----------------------- Display the todos
        let todosContainer = projectClone.querySelector(".todos-list");
        project.todos.forEach((todo, todoIndex) => {
            let cardTemplate = document.getElementById("todo-card-template");
            let todoClone = cardTemplate.content.cloneNode(true);

            todoClone.querySelector(".todo-title").textContent = todo.title;
            todoClone.querySelector(".todo-description").textContent = todo.description;
            todoClone.querySelector(".todo-card").setAttribute("data-todo-index", todoIndex);
            todoClone.querySelector(".todo-due-date").textContent = todo.dueDate;
            todoClone.querySelector(".todo-priority").textContent = todo.priority;
            todoClone.querySelector(".done").checked = todo.done;
            todoClone.querySelector(".done").onchange = (e) => {
                doneStatus(todo, e);
                displayProjectCard();
            }
            todoClone.querySelector(".todo-delete-button").onclick = () => {
                deleteTodo(projectIndex, todoIndex);
                displayProjectCard();
            }
            let card = todoClone.querySelector(".todo-card");
            card.draggable = true;

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

// ----------------------- Drag and Drop 
export function dragAndDrop() {
    const projectList = document.getElementById("all-projects-container");
    let fromIndex, todoIndex;

    projectList.addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("todo-card")) {
            fromIndex = e.target.closest(".project-card").dataset.index;
            todoIndex = e.target.dataset.todoIndex;
            e.dataTransfer.effectAllowed = "move";
        }
    });

    projectList.addEventListener("dragover", (e) => {
        e.preventDefault;
        e.dataTransfer.dropEffect = "move";
    });

    projectList.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("Drop event triggered");

        const toProject = e.target.closest(".project-card");

        console.log("Drop target element:", e.target);
        console.log("Closest project card:", toProject);
        if (toProject) {
            const toIndex = toProject.dataset.index;
            console.log("Moving todo to project index:", toIndex);

            moveTodoBetweenProjects(Number(todoIndex), Number(fromIndex), Number(toIndex));

            localStorage.setItem("projects", JSON.stringify(myProjects));
            displayProjectCard();
        } else {
            console.log("Drop target is not a project card.");
        }
    })
}