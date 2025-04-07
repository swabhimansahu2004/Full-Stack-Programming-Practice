import { useState,useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { Todo } from "../Storage/todo.jsx";

function AddInput(){
    const {addNewItem}=useContext(Todo);//From Todo use addNewItems only
const todoName=useRef();
const duedate=useRef();
const handleButtonClick=()=>{
    const TodoName=todoName.current.value;
    const TodoDate=duedate.current.value;
    //console.log(TodoName,TodoDate);
    addNewItem(TodoName,TodoDate);
    todoName.current.value="";
    duedate.current.value="";
};
    return <>
    <div className="row">
    <div className="col-6"><input type="text" ref={todoName} placeholder="Enter Task Here:" /></div>
    <div className="col-4"><input type="date" ref={duedate} /></div>
    <div className="col-2"><button type="button" onClick={handleButtonClick} className="btn btn-success">
    <IoMdAdd /></button></div>
    </div>
    </>
};//onChange is not reuired any more as  ref will take all the values at once without re rendering which increases performance in input
export default AddInput;
/*onClick will directly call the event handler function and 
not pass the event object as an argument to the function.*/