/*import BUTOON from "./Components/BUTOON";
import {Buttn} from "./Components/Buttn";

<BUTOON></BUTOON>
<br />
<Buttn></Buttn>
*/
//import "./App.css";
import Hello from "./Components/Hello.jsx";
import Random from "./Components/Random1.jsx";
import MAP from "./Components/MAP.jsx";
import Conditions from "./Components/Conditions.jsx";
import Container from "./Components/Container.jsx";
import "./App.css";

function App(){
  let food=['Orange','Milk','Salad','Vegetables','Fruits'];
  let food1=[];
return(
  <Container>     
  <h1>
    Hello World
  </h1>
<Hello></Hello>
Random Number:<Random></Random>
<MAP items={food}/>
<Conditions items={food1} />
</Container>
); 
}
export default App;

{/*Fragment is added to avoid the error of returning multiple elements and using an extra div tag 
We can also use <React.Fragment> instead of <>*/}