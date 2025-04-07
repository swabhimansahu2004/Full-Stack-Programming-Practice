import { useContext } from "react";
import { Todo } from "../Storage/todo.jsx";
const EmptyMsg = () => {
    const {todoContext}=useContext(Todo);
    if(todoContext.length>0){
        return null;
    }
    return (
        <div className="empty-msg">
            <p>There are no items to do.</p>
        </div>
    );
}
export default EmptyMsg;