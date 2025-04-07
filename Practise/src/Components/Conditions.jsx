const Conditions = ({items}) => {
    let msg=items.length === 0 ? <h2>No food items</h2> : <p>Food items are available</p>
    {/*Conditional rendering*/};
    return (
    <>
    {msg}{/*Method 1*/}
    {items.length === 0 ? <h2>No food items</h2> : <p>Food items are available</p>}{/*Method 2*/}
    {items.length  ===0 && <h2>No food items</h2>}{/*Method 3*/}
    </>
);
}
export default Conditions;