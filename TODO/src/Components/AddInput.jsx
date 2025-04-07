import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AddInput({onNewItem}){
const [TodoName,setTodoName]=useState("");
const [TodoDate,setTodoDate]=useState("");
const handleNameChange=(e)=>{
    setTodoName(e.target.value);
}
const handleDateChange=(e)=>{
    setTodoDate(e.target.value);
}
const handleButtonClick=()=>{
    onNewItem(TodoName,TodoDate);
    setTodoDate("");
    setTodoName("");
};
    return <>
    <div className="row">
    <div className="col-6"><input type="text" value={TodoName} placeholder="Enter Task Here:" onChange={handleNameChange} /></div>
    <div className="col-4"><input type="date" value={TodoDate} onChange={handleDateChange}/></div>
    <div className="col-2"><button type="button" onClick={handleButtonClick} className="btn btn-success">
    <IoMdAdd /></button></div>
    </div>
    </>
};
export default AddInput;
/*onClick will directly call the event handler function and 
not pass the event object as an argument to the function.*/