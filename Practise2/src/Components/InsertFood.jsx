function InsertFood({eventonchange}){
    
    return <>
    <input type="text" placeholder="Enter a food item:" className="inp" 
    onKeyDown={eventonchange}/>
    </>
};
export default InsertFood;