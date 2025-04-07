import { FaDeleteLeft } from "react-icons/fa6";
function AddItems({item,date,onDeleteClick}){
    return <>
    <div className="container">
    <div className="row">
<div className="col-6">{item}</div>
<div className="col-4">{date}</div>
<div className="col-2"><button type="button" onClick={()=>onDeleteClick(item)} className="btn btn-danger">
<FaDeleteLeft /></button></div>    
    </div>
    </div>
    </>
}
export default AddItems;
// React has its own library for Icons from where we can import