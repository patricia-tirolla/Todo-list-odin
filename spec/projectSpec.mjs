import { myProjects, addProjectToList, addTodoToProject, changeProjects } from "../src/projects.js";
import { myTodos, addTodoToList } from "../src/todo.js";


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
        addTodoToList("Task1", "anything", "2024-11-01", "high");
        addTodoToProject(0, 0);
        expect(myProjects[0].todos.length).toBe(1);
        expect(myProjects[0].todos[0]).not.toBe(undefined);
    })
    it("should change todos from one project to another", () => {
        addProjectToList("test project");
        addProjectToList("test project2");
        addTodoToProject(0, 0);
        addTodoToList("Task1", "anything", "2024-11-01", "high");
        
        changeProjects(0, 0, 1);
        expect(myProjects[0].todos.length).toBe(0);
        expect(myProjects[1].todos.length).toBe(1);
    })
})

describe("List", () => {
    beforeEach( () => {
        myTodos.splice(0, myTodos.length);
    })
    it("should add todo to list", () => {
        addTodoToList("Task1", "anything", "2024-11-01", "high");
        expect(myTodos.length).toBe(1);

        addTodoToList("Task2", "anything", "2024-11-02", "low");
        expect(myTodos.length).toBe(2);
        expect(myTodos[0].title).toBe("Task1");
        expect(myTodos[1].title).toBe("Task2");
    })
})
