// Modal show button
export function showNewTodoModal() {

    const addtodoButton = document.getElementById("add-todo-button");
    const modal = document.getElementById("todo-dialog");

    addtodoButton.addEventListener("click", () => {
        modal.show();
    })
};

// Modal close button
export function closeNewTodoModal() {

    const addtodoButton = document.getElementById("cancel-button");
    const modal = document.getElementById("todo-dialog");

    addtodoButton.addEventListener("click", () => {
        modal.close();
    })
};

