import { Todo } from "./todo";

export const myProjects = [
    new Project("Default Project"),
];

function Project(title) {
    this.title = title;
    this.todos = [];
};

// export const projectDefault = new Project("Default Project");

export function addNewProjectToList(title) {
    myProjects.push(new Project(title));
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

// export function addNewTodoToList(title, description, dueDate, priority) {
//     myProjects[0].todos.push(new Todo(title, description, dueDate, priority));
// }

export function addTodoToProject(projectIndex, todo) {
    myProjects[projectIndex].todos.push(todo);

    localStorage.setItem("projects", JSON.stringify(myProjects));
}

export function deleteTodo(projectIndex, todoIndex) {
    myProjects[projectIndex].todos.splice(todoIndex, 1);
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

export function deleteProject(title) {
    myProjects.splice(title, 1);
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

export function moveTodoBetweenProjects(todoIndex, fromIndex, toIndex) {
    // .splice() returns a list of the removed items, that can be stored in a variable
    // const [item0] = ["a"] is the same as const list = ["a"]; const item0 = list[0]
    const [removedTodo] = myProjects[fromIndex].todos.splice(todoIndex, 1);
    addTodoToProject(toIndex, removedTodo);
    localStorage.setItem("projects", JSON.stringify(myProjects));
}