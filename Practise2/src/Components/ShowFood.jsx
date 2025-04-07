const ShowFood = ({ items,onClickbuy }) => {
    return <>
            {items.map((item, index) => {
                return <div className={`ctnr`} >
                <span key={index} className="items">{item}</span>
                <button className="btn_ctnr btn btn-success" onClick={()=>onClickbuy(item)}>Buy</button>
                </div>
            })}
    </>
};//items array is passed from parent to this child where it is mapped and shown on the site.
export default ShowFood;
{/*we use {} when we want to use js code in jsx.and we write ${} to use js code in string.*/
    /*we have now taken the function of buy button out of the map function and put it in a separate function called onClickbuy.*/
    /*we have passed the onClickbuy function as a prop to the ShowFood component and then used it in the button in the ShowFood component.*/
    /*we have used the arrow function to pass the item as an argument to the onClickbuy function.*/
}