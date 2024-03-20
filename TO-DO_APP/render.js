//import the store
import store from "./store.js";

//now writing our render function
function render(){
    //alert("render");
    //now targeting the element where I want to render my TO-D0
    const root=document.querySelector(".todos");
    //now use the store object and render this my using map
    const items=store.todos.map((element)=>{
        return `<li class="todo" data-id=${element.id}>
        <span class="todo-title ${element.completed ? "completed" : ""}">${element.title}</span>
        <div class="toggle-delete">
          <input type="checkbox" name="completed" class="todo-checkbox" 
          ${(element.completed)? "checked" : ""}/>
          <button class="delete-todo-button">x</button>
        </div>
        </li>`
    })
    //items gives you the array now we have to join that array and from a string
    const finalTodo=items.join('');
    //put the items inside the root
    root.innerHTML=finalTodo;
}

export default render;