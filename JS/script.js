const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#textInput");
const todolist = document.querySelector("#lista");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#editInput");
const cancelEdit = document.querySelector(".Btcancel");

//funções
const saveTodo = (text) =>{

    const todo = document.querySelector("div");
    todo.classList.add("to-do");

    const todoTitle = document.createElement("p");
    todoTitle.innerHTML = text;
    todo.appendChild(todoTitle);

    const btDone = document.createElement("button");
    btDone.classList.add("done_task");
    btDone.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`;
    todo.appendChild(btDone);

    const btEdit = document.createElement("button");
    btEdit.classList.add("edit_task");
    btEdit.innerHTML = `<ion-icon name="pencil"></ion-icon>`;
    todo.appendChild(btEdit);

    const btRemove = document.createElement("button");
    btRemove.classList.add("remove_task");
    btRemove.innerHTML = `<ion-icon name="trash"></ion-icon>`;
    todo.appendChild(btRemove);

    todolist.appendChild(todo);

    todoInput.value = "";
};
//Events

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue){
        saveTodo(inputValue);
    }
});
