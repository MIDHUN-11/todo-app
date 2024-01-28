import React, { useRef, useState } from "react"
const Uncontrolled=()=>{
    const myref=useRef();
    const[value,setValue]= useState('');
    
    return(
        <>
        <input value={value}  ref={myref} onChange={(e)=>{
            setValue(e.target.value);
        }}/>
        <button onClick={()=>{
            // console.log(myref.current.value);
            console.log(value);
        }}>submit</button>
        </>
    )
}
export default Uncontrolled;