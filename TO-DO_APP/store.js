const store = {
    todos: [
      {
        id: "1",
        title: "Complete Task A",
        completed: false,
      },
      {
        id: "2",
        title: "Read Book",
        completed: true,
      },
    ],
  };
//making the store handler to interact with the store
const storeHandler={
    //get traps that will get the data
    get(target,property){
        return target[property];
    },
    //now we have to set TODO when user interact with that
    set(target,property,value){
        //now we dispatch a custom event according to that we render our page
        target[property]=value;
        if(property=="todos"){
            window.dispatchEvent(new Event("todosChange"));
        }
        //adding on localstorage
        localStorage.setItem("store",JSON.stringify(store));
        return true;
    }
}
//make a proxy for interact with store
const storeProxy=new Proxy(store,storeHandler);
export function addTodo(newTodo){
  storeProxy.todos=[...storeProxy.todos,newTodo];
}
export function delTodo(id){
  storeProxy.todos=storeProxy.todos.filter((item)=>item.id!==id);
}

export function toggleComplete(id,completed){
  storeProxy.todos=storeProxy.todos.map((item)=>{
    if(item.id==id){
      return {...item,completed: completed};
    }
    else
    {
      return item;
    }
  })
}
export default storeProxy;
