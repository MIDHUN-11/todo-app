import {useState} from 'react';
const Counter=()=>{
    // let count=0;
    function incrementFun(){
        // count=count+1;
        setCount(count+1);
        console.log(count);
    }
    const[count,setCount]=useState(0);
    return(
        <>
            <h1>Counter</h1>
            <button onClick={incrementFun} >+</button>
            <h3>{count}</h3>
            <button onClick={()=>{
                setCount(count-1);
            }}>-</button>
        </>
    )
}
export default Counter;