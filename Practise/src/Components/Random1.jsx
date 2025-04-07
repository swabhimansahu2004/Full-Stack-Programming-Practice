import styles from "./Random1.module.css";
function Random(){
    let num=Math.random()*100;
    return <h1 className={styles.it}>Random Number is:{Math.round(num)}</h1>

}
export default Random;