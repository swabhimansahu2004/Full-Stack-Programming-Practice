import { FaDeleteLeft } from "react-icons/fa6";
import { Todo } from "../Storage/todo.jsx";
import { useContext } from "react";
function AddItems({item,date}){
    const { deleteItem }=useContext(Todo);//access deleteItem from Context Todo
    return <>
    <div className="container">
    <div className="row">
<div className="col-6">{item}</div>
<div className="col-4">{date}</div>
<div className="col-2"><button type="button" onClick={()=>deleteItem(item)} className="btn btn-danger">
<FaDeleteLeft /></button></div>    
    </div>
    </div>
    </>
}
export default AddItems;
// React has its own library for Icons from where we can import