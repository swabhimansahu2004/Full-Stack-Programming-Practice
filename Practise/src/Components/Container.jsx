const Container=(props)=>{
    return <>
    <div className="containers">
        {props.children}
    </div>
    </>
};
export default Container;
{/*We use container to wrap the elements and apply css to it and we can use it multiple times.It helps to manage several components by 
    taking them in multiple container.*/
/*here props.children is used to take the elements inside the container tag and display them.*/}