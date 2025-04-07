import ShowFood from "./Components/ShowFood";
import InsertFood from "./Components/InsertFood";
import "./App.css";
import { useState } from "react";

function App() {

  // Using useState with clearer variable names
  const [food, setValue] = useState(["Biryani", "Karahi", "Pulao", "Kabab", "Nihari"]);

  // Function to handle item purchase
  const onClickbuy = (item) => {
    console.log(`${item} is bought`);
  };

  // Function to handle input changes
  const eventonchange = (event) => {
    if(event.key==="Enter"){
        setValue([...food, event.target.value]);
        //adds the new element to the array
        event.target.value = "";//clears the text box
    }
    };

  return (
    <>
      <h1 className="head">Food Items</h1>
      <InsertFood eventonchange={eventonchange} />
      <ShowFood items={food} onClickbuy={onClickbuy} />
    </>
  );
}

export default App;
{/*we have used the useState hook to create a state variable called food 
    and a function called setValue to update the state variable.*/
/*...food is used to spread the food array and then add the new item to it.*/
/*event.target.value is used to get the value of the input field.*/
/*event.target.value = "" is used to clear the input field after the Enter key is pressed.*/
/*We have passed the eventonchange function as a prop to the InsertFood component and then used it in the input field in the InsertFood component.*/}