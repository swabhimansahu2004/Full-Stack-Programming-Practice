import styles from "../App.module.css";
const TypeBox=()=>{
    return <>
    <input className={styles.display} type="text"/>
    </>
};
export default TypeBox;
{/*For Now I have kept all the styles in App module css but we must create separate modules for sseparate jsx file to avoid confusion.
     the declaration of module of each jsx file would be jsx file name.module.css */}