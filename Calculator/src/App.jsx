import styles from "./App.module.css";
import TypeBox from "./Components/TypeBox";
import ButtonsContainer from "./Components/ButtonsContainer";
function App(){
return <>
<center>
<h1 className="Head">CALCULATOR</h1>
<div className={styles.calculator}>
<TypeBox></TypeBox>
<ButtonsContainer></ButtonsContainer>
</div>
</center>
</>
};
export default App;