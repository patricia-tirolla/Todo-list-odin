import { showNewTodoModal, } from "./UI";
import { closeNewTodoModal } from "./UI";

import { myProjects, addProjectToList, deleteProject } from "./projects";

import { addTodoToList, myTodos, deleteTodo, definePriority } from "./todo";



showNewTodoModal();
closeNewTodoModal();

function addTodoToProject(projectIndex, todoIndex) {
    // Check for valid indices
    if (myProjects[projectIndex] && myTodos[todoIndex] !== undefined) {
        myProjects[projectIndex].todos.push(myTodos[todoIndex]);
        console.log("this works!")
    } else {
        console.log("Index out of bounds.");
    }
}

// --------------------- Test
console.log("it's working!");

function addProjectToListTest() {
    console.log(`myProjects has ${myProjects.length} items before adding project to the list:`)

    addProjectToList();

    console.log(`myProjects has ${myProjects.length} items after adding project to the list:`)
    console.assert(myProjects.length === 1);
    console.log(myProjects);
}
addProjectToListTest();

function addTodoToListTest() {
    console.log(`myTodos has ${myTodos.length} items before adding project to the list`)

    addTodoToList();

    console.log(`myTodos has ${myTodos.length} items after adding project to the list:`)
    console.assert(myProjects.length === 1);
}
addTodoToListTest();

console.log(myTodos);

console.log(myTodos);
addTodoToList();
console.log(myTodos);

console.log(myProjects);
addTodoToProject(0, 1);
console.log(myProjects);
console.log(myProjects.length)

console.log(myTodos)
console.log(myTodos.length)