import { projectDefault, myProjects, addProjectToList, addTodoToProject, moveTodoBetweenProjects } from "../src/projects.js";
import { Todo, createNewTodoObject } from "../src/todo.js";


describe("Project", () => {
    beforeEach(() => {
        myProjects.splice(0, myProjects.length);
    })
    it("should add project to list", () => {
        expect(myProjects.length).toBe(0);
        addProjectToList("projectt1");
        expect(myProjects.length).toBe(1);
    })
    it("should add todo to project list", () => {
        addProjectToList("test project");
        addTodoToProject(0, new Todo("Task1", "anything", "2024-11-01", "high"));
        expect(myProjects[0].todos.length).toBe(1);
        expect(myProjects[0].todos[0]).not.toBe(undefined);
    })
    it("should change todos from one project to another", () => {
        addProjectToList("test project");
        addProjectToList("test project2");
        addTodoToProject(0, new Todo("Task1", "anything", "2024-11-01", "high"));
        
        moveTodoBetweenProjects(0, 0, 1);
        expect(myProjects[0].todos.length).toBe(0);
        expect(myProjects[1].todos.length).toBe(1);
        expect(myProjects[1].todos[0]).toBeInstanceOf(Todo);
        console.log(myProjects[1].todos);
    })
    it("should change todos from default to other project", () => {
        addProjectToList("test project");
        addProjectToList("test project2");
        addTodoToProject(0, new Todo("Task1", "anything", "2024-11-01", "high"));
        
        moveTodoBetweenProjects(0, 0, 1);
        expect(myProjects[0].todos.length).toBe(0);
        expect(myProjects[1].todos.length).toBe(1);
        expect(myProjects[1].todos[0]).toBeInstanceOf(Todo);
        console.log(myProjects[1].todos);
    })

})

describe("List", () => {
    beforeEach( () => {
        projectDefault.todos.splice(0, projectDefault.todos.length);
    })
    it("should add todo to list", () => {
        createNewTodoObject("Task1", "anything", "2024-11-01", "high");
        expect(projectDefault.todos.length).toBe(1);

        createNewTodoObject("Task2", "anything", "2024-11-02", "low");
        expect(projectDefault.todos.length).toBe(2);
        expect(projectDefault.todos[0].title).toBe("Task1");
        expect(projectDefault.todos[1].title).toBe("Task2");
    })
})
