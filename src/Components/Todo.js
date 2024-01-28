import { useState, useRef } from 'react';
const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState('');
    
    const inputRef = useRef();
    const taskData = (event) => {
        setTask(event.target.value);
    }
    const addTask = () => {
        setTodo((prev) => {
            // const arr=[...prev,task];
            const arr = [...prev, inputRef.current.value];
            return arr;
        })
        // setTodo(...todo,task);
    }
    const deleteTask=(index)=>{
        setTodo((currentTodo)=>{
            // return [...(currentTodo.splice(index,1))];
            return currentTodo.filter((todo,idx)=>{
                return idx!==index;
            })
        })
    }
    console.log(todo);
    return (
        <>
            <h1>ToDO List</h1>
            <div>
                <input placeholder='enter the task'
                    //  onChange={taskData}
                    ref={inputRef}></input>
                <button onClick={addTask}>add task</button>
                <ul>
                    {todo.map((value, index) => {
                        return (<li key={index}>{value}
                        <button onClick={()=>deleteTask(index)}>delete</button>
                        </li>);
                    })}
                </ul>
            </div>
        </>
    )
}
export default Todo;