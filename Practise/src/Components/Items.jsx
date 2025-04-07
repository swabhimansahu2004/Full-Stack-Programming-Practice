
const Items = (props) => {
    //let {foodItem}=props;
    return (
        <>
        <li className="list-group-item">{props.foodItem}</li>
        </>
    );
}
export default Items;

{/*Here we are taking the props from the parent component that is MAP.jsx 
    and displaying it in the form of a list item.
    Similarly the same thing is happening in Conditions.jsx where
    we are taking props and displaying whether the items are available or not*/}

{/*We can destructure the props in the functional component 
    as shown in the commented line 1*/}

{/*We can directly destruct the props in the function parameter
    itself as shown below:
    const Items = ({foodItem}) => {}*/}