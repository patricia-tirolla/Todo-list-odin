export const myProjects = [];

function Project(title) {
    this.title = title;
    this.todos = [];
};

export const projectDefault = new Project("Default Project");

export function addProjectToList(title) {
    myProjects.push(new Project(title));
}

export function addTodoToProject(projectIndex, todo) {
    myProjects[projectIndex].todos.push(todo);
}

export function deleteProject(title) {
    myProjects.splice(title, 1);
}

export function moveTodoBetweenProjects(todoIndex, fromIndex, toIndex) {
    // .splice() returns a list of the removed items, that can be stored in a variable
    // const [item0] = ["a"] is the same as const list = ["a"]; const item0 = list[0]
    const [removedTodo] = myProjects[fromIndex].todos.splice(todoIndex, 1);
    addTodoToProject(toIndex, removedTodo);
}

export function moveTodoFromDefault(todoIndex, toIndex) {
    // .splice() returns a list of the removed items, that can be stored in a variable
    // const [item0] = ["a"] is the same as const list = ["a"]; const item0 = list[0]
    const [removedTodo] = projectDefault.todos.splice(todoIndex, 1);
    addTodoToProject(toIndex, removedTodo);
}
