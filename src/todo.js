export function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; 
};

export function definePriority(todo) {
    if (todo.priority = "High") {
        console.log("This todo has a high priority. Do it now!");
    } else if (todo.priority = "Medium") {
        console.log("This todo has a medium priority. Do it by the due date");
    } else if (todo.priority = "Low") {
        console.log("This todo has a low priority. You can do another todos first");
    }
}
