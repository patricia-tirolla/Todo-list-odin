import { showNewTodoModal, } from "./UI";
import { closeNewTodoModal } from "./UI";

import { myProjects, addProjectToList, deleteProject } from "./projects.js";
import { addTodoToList, myTodos, deleteTodo, definePriority } from "./todo";



showNewTodoModal();
closeNewTodoModal();

// --------------------- Tests
console.log("it's working!");

// import { addTodoToListTest, addProjectToListTest, addTodoToProjectTest, changeProjectsTest } from "./tests";
// addTodoToListTest();
// addProjectToListTest();
// addTodoToProjectTest();
// changeProjectsTest();

