export const myTodos = [];
 
function Todo(title, description, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; 
    this.status = status;
};

function createATodo() {
    let todoTitle = document.getElementById("todo-title");
    let todoDescription = document.getElementById("todo-description");
    let todoDueDate = document.getElementById("todo-due-date");
    let todoPriority = document.getElementById("todo-priority");

    return new Todo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
}

export function addTodoToList() {
    myTodos.push(createATodo());
}

export function deleteTodo(index) {
    myTodos.splice(index, 1);
}

export function definePriority(todo) {
    if (todo.priority = "High") {
        console.log("This todo has a high priority. Do it now!");
    } else if (todo.priority = "Medium") {
        console.log("This todo has a medium priority. Do it by the due date");
    } else if (todo.priority = "Low") {
        console.log("This todo has a low priority. You can do another todos first");
    }
}
