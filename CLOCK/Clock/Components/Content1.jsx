import {useState,useEffect}from"react";
function Content1() {

  const [time, settime] = useState(new Date());
  //initialises time and time holds the current time .
  //settime used to update the time value
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      settime(new Date());
    },1000);//runs new Date every 1000 milliseconds i.e every second the time component will be updated through settime.
    return ()=>{
      clearInterval(intervalId);//clear interval after every use of useEffect
    }
  })
  return (
    <div className="content-text">
        <p>This Clock shows the time in BHARAT at all times</p>
        <p>This is current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
    </div>//from time which uses new Date() time.toLocaleDateString() shows current date time.toLocaleTimeString() shows current time.
  );//here react re renders the component every 1000 milliseconds displaying new time.
}
export default Content1;