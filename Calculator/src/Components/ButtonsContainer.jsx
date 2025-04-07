import styles from "../App.module.css";
const ButtonsContainer=()=>{
    const buttonValues=[
        "7","8","9","/","4","5","6","*","1","2","3","-","C","0","=","+"
    ];
    return <>
    <div className={styles.buttons_container}>
    {buttonValues.map(value => <button className={styles.button}>{value}</button>)}
    
</div>
    </>
};
export default ButtonsContainer;