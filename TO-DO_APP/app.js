import render from "./render.js";
import store from "./store.js"
import { addTodo,delTodo,toggleComplete } from "./store.js";

window.addEventListener('todosChange',()=>{
    render();
})
//try to get from local storage
const storeFromLocal=JSON.parse(localStorage.getItem("store"));
if(storeFromLocal?.todos.length>0){
    store.todos=storeFromLocal.todos;
}else{
    //initial render
    localStorage.setItem("store",JSON.stringify(store));
    render();
}

//add to do code 
const fromInput=document.querySelector("#form");
fromInput.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todoInput=document.querySelector(".todo-title-input");
    if(todoInput==""){
     alert("Please Enter a valid Task");   
    }
    else{
        const newTodo=todoInput.value;
        const newTodoobj={id:crypto.randomUUID(),title:newTodo,completed:false};
        addTodo(newTodoobj);
    }
    todoInput.value="";
})

//delete functionality
const todos=document.querySelector('.todos');
todos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-todo-button"))
    {
        const id=e.target.closest(".todo").dataset.id;
        delTodo(id);
    }
})

//checkbox event
todos.addEventListener("change",(e)=>{
    if(e.target.classList.contains("todo-checkbox")){
        const id=e.target.closest(".todo").dataset.id;
        const completed=e.target.checked;
        toggleComplete(id,completed);
    }    
})