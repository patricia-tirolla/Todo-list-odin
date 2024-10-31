import { myTodos } from "./todo.js";
export const myProjects = [];

function Project(title) {
    this.title = title;
    this.todos = [];
};

export function addProjectToList(title) {
    myProjects.push(new Project(title));
}

export function addTodoToProject(todoIndex, projectIndex) {
    myProjects[projectIndex].todos.push(myTodos[todoIndex]);
}

export function deleteProject(title) {
    myProjects.splice(title, 1);
}

export function changeProjects(todoIndex, fromIndex, toIndex) {
    myProjects[toIndex].todos.push(myTodos[todoIndex]);
    myProjects[fromIndex].todos.splice(myTodos[todoIndex], 1);
}