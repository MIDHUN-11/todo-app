import { useEffect, useState } from "react";

const LifeCycle =()=>{
   
    const [click,setClick] = useState(false);
    const clickFunction=()=>{
        setClick(true);
    }
    useEffect(()=>{
        console.log("this is function inside useeffect");
    },[click]);
    return(
        <div>
            <button onClick={clickFunction}>click me</button>
        </div>
    )
}
export default LifeCycle;