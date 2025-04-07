import Items from './Items.jsx';
function MAP({items}){
    
    return(
        <>
        <h1>Food Items</h1>
        <ul className="list-group">
            {items.map((Item) =>( <Items key={Item} foodItem={Item}></Items>))}
        </ul>
        </>
    );//here we are using items as key assuming items are unique else generate a unique key forr each element.
}
export default MAP;
{/*In the above code, we have created a functional component MAP that returns a list of food items.
    Here an Array fooditems is created that contains the names of food items which are then displayed in an unordered list using 
    the map() method.*/}
    {/*The map method has syntax array.map(callback(currentValue, index, array), thisArg) where call back is 
        a function that produces an element of the new array, currentValue is the current element being processed in the array and 
        index is the index of the current element being processed in the array.*/}
        {/*We have used key attribute in the li tag to uniquely identify each list item to optimise re-renders.*/}
{/*The values will come from parent that is App which can then be used by props from each component*/}