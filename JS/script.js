const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#textInput");
const todolist = document.querySelector("#lista");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#editInput");
const cancelEditBtn = document.querySelector("#BtCancel");
const tollbar = document.querySelector("#troolbar");
let oldValue;

//funções
const saveTodo = (text) =>{

    const todo = document.createElement("div");
    todo.classList.add("todo");

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
    todoInput.focus();

};

const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todolist.classList.toggle("hide");
    tollbar.classList.toggle("hide");
}

const updateTodo = (text) => {
    const alltodo = document.querySelectorAll(".todo");

    alltodo.forEach((todo) => {
        let todoTitle = todo.querySelector("p");

        if(todoTitle.innerText ===  oldValue){
            todoTitle.innerText = text;
        }
    })
}
//Events

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue){
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {

    const BtClick = e.target;
    const AcessTask = BtClick.closest("div");
    let todoTitle;

    
    if(AcessTask && AcessTask.querySelector("p")){
        todoTitle = AcessTask.querySelector("p").innerText || "";
    }

    if(BtClick.classList.contains("done_task")){
        AcessTask.classList.toggle("done");
        console.log("vapor1");
    }

    if(BtClick.classList.contains("edit_task")){
        e.preventDefault();
        console.log("vapor4");
        toggleForms();

        editInput.value = todoTitle;
        oldValue = todoTitle;
    }

    if(BtClick.classList.contains("remove_task")){
        e.preventDefault();
        AcessTask.remove();
        console.log("vapor3");
    }

});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
  });

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;
    if(editInputValue){
        updateTodo(editInputValue);
    }
    toggleForms();
});