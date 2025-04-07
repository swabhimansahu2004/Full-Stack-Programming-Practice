import AddItems from "./AddItems";
import { useContext } from "react"; 
import { Todo } from "../Storage/todo.jsx";
const AddComponents = ({onDeleteClick}) => {//todolist
    const {todoContext}=useContext(Todo);//from Todo use only todoContext which contains the list
    //console.log(todoContext);  
    return <>
    <div className="container">
    {todoContext.map((item,index) =><AddItems key={index} item={item.itemname} date={item.date} onDeleteClick={onDeleteClick}/>)}
    </div>
    </>
};
export default AddComponents;
//todolist