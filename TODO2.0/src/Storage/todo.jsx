import { createContext } from "react";
import { useReducer } from "react";//useState

export const Todo=createContext([]);//1

const TodoReducer=(TodoItems,action)=>{//2

    let newTodoItems=TodoItems;//Initial array is added to new array
    if(action.type==="ADD_ITEM"){
        const newTodoItems=[...TodoItems,{itemname:action.payload.itemName,date:action.payload.itemDueDate}];
        //setTodoItems(newTodoItems);
        return newTodoItems;
    }
    else if(action.type==="Delete_Item"){
        const newTodoItems=TodoItems.filter((todoItem)=>todoItem.itemName!==action.payload.item);
        //setTodoItems(newTodoItems);
        return newTodoItems;
    }
    else{
        return TodoItems;
    }
};

const TodoItemsContextProvider=({children})=>{//3 

 // const [TodoItems,setTodoItems]=useState([]);
 const [TodoItems,dispatchTodoItems]=useReducer(TodoReducer,[]);//Here on calling dispatch,TodoReducer will be called.
//In todoReducer function we will check action and get TodoItems initial value .
//if action is called add then array added and action is called delete then value is deleted.
 const addNewItem=(itemName,itemDueDate)=>{
 
     const newItemAction={
         type:"ADD_ITEM",
         payload:{//payload supplies values
             itemName,itemDueDate
         },
     };
     dispatchTodoItems(newItemAction);
 // console.log(`New Item Added ${itemName} due on ${itemDueDate}`);
  
 };
 
 const deleteItem=(item)=>{
     // console.log(`Item Deleted ${item}`);
     const deleteItemAction={
         type:"Delete_Item",
         payload:{
             itemName:item
         },
     };
     dispatchTodoItems(deleteItemAction);
 };
 return <Todo.Provider value={{
    todoContext:TodoItems,
    addNewItem,
    deleteItem}}> 
    {children}
    </Todo.Provider> 
//children -> This allows all nested components inside TodoItemsContextProvider to access the to-do list and related functions via useContext(Todo)
};//functions that can be called by childrens using provider and useContext
export default TodoItemsContextProvider;