function Hello(){

    let myName="Ajay";
    let num=10;
    let full=()=>{
        return "Ajay Kumar"; 
    }
    return <p>
        Hello World this is me!{myName},{full()},{num}
    </p>
}
export default Hello;