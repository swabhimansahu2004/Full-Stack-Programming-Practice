import AddInput from "./Components/AddInput";
import './App.css';
import AddComponents from "./Components/AddComponents";
import EmptyMsg from "./Components/EmptyMsg";
import  TodoItemsContextProvider  from "./Storage/todo";

function App(){
  
return <>
<center>
    <TodoItemsContextProvider>
    <h2>TODO LIST</h2>
    <AddInput/>
   <EmptyMsg></EmptyMsg>
    <AddComponents/>
    </TodoItemsContextProvider>
</center>
</>
//TodoItemsContextProvider wraps evrything and provides global state
}
export default App;