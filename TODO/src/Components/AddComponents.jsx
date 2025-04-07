import AddItems from "./AddItems";
const AddComponents = ({todolist,onDeleteClick}) => {
    return <>
    <div className="container">
    {todolist.map((item,index) =><AddItems key={index} item={item.itemname} date={item.date} onDeleteClick={onDeleteClick}/>)}
    </div>
    </>
};
export default AddComponents;