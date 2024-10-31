export const myProjects = [];

function Project(title) {
    this.title = title;
    this.todos = [];
};

function createAProject() {
    let projectTitle = document.getElementById("project-title");

    return new Project(projectTitle.value);
}

export function addProjectToList() {
    myProjects.push(createAProject());
}

export function deleteProject(title) {
    myProjects.splice(title, 1);
}