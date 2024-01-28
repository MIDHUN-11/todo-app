import {useState,useRef} from 'react';
const Todo=()=>{
    const [todo,setTodo] = useState([]);
    const [task,setTask] = useState('');
    const inputRef=useRef();
    const taskData=(event)=>{
        setTask(event.target.value);
    }
    const addTask=()=>{
        setTodo((prev)=>{
            // const arr=[...prev,task];
            const arr=[...prev,inputRef.current.value];
            return arr;
        })
        // setTodo(...todo,task);
    }
    console.log(todo);
    return(
        <>
            <h1>ToDO List</h1>
            <div>
                <input placeholder='enter the task'
                //  onChange={taskData}
                  ref={inputRef}></input>
                <button onClick={addTask}>add task</button>
            </div>
        </>
    )
}
export default Todo;