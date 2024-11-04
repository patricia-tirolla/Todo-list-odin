
import "./style.css"
import { showNewTodoModal, closeNewTodoModal, showNewProjectModal, closeNewProjectModal, addNewTodoButton, addNewProjectButton, showWelcomeModal, closeWelcomeModal } from "./modalUI.js";
import { myProjects, addNewProjectToList, addTodoToProject } from "./projects.js";
import { Todo } from "./todo";
import { displayProjectAndTodoCards, getProjectsFromLocalStorage } from "./projectsUI.js";
import { sincLocalStorageWithJs } from "./localStorage.js";



// ----------------------- Update local storage and display
sincLocalStorageWithJs();
getProjectsFromLocalStorage();
displayProjectAndTodoCards();