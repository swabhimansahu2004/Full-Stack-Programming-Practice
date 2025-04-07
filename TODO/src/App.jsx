import AddInput from "./Components/AddInput";
import './App.css';
import AddComponents from "./Components/AddComponents";
import { useState } from "react";
function App(){
    const [TodoItems,setTodoItems]=useState([]);

const handleNewItem=(itemName,itemDueDate)=>{
// console.log(`New Item Added ${itemName} due on ${itemDueDate}`);
const newTodoItems=[...TodoItems,{itemname:itemName,date:itemDueDate}];
setTodoItems(newTodoItems);
};

const handleDelete=(item)=>{
    // console.log(`Item Deleted ${item}`);
    const newTodoItems=TodoItems.filter((todoItem)=>todoItem.itemname!==item);
    setTodoItems(newTodoItems);
};

return <>
<center>
    <h2>TODO LIST</h2>
    <AddInput onNewItem={handleNewItem} />
    {TodoItems.length===0?<p className="welcome">All Work Done</p>:null}
    <AddComponents todolist={TodoItems} onDeleteClick={handleDelete}/>
</center>
</>
}
export default App;