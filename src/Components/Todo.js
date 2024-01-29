import { useState, useRef } from 'react';
import '../todoStyle.css';
const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState('');
    const [isUpdate,setIsUpdate] =useState(false);
    const [updateElement,setUpdateElement] =   useState(-1);
    // const [nullify,setNullify] =useState(false);
    
    const updateRef=useRef();
    const inputRef = useRef();
    const taskData = (event) => {
        setTask(event.target.value);
    }
    const addTask = () => {
        setTodo((prev) => {
            // const arr=[...prev,task];
            const arr = [...prev, inputRef.current.value];
            // setTask('');
            // taskData()
            // setNullify(true);
            // inputRef.current.value='';
            // setNullify(false);
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
    
    // const updateTask=(index)=>{
    //     setTodo((currentTodo)=>{
    //         currentTodo.forEach((value,idx)=>{
    //             if(index===idx){
    //                 // return [...currentTodo,updateRef.current.value];
    //                  currentTodo[idx]=updateRef.current.value;
    //                 //  return [...currentTodo];
    //             }
    //         })
    //         return [...currentTodo];}
    //     )
    // }
    const updateTask=()=>{
        setTodo((currentTodo)=>{
            const arr= [...currentTodo];
            arr[updateElement]=updateRef.current.value;
            
            return arr;
        });
    }
    console.log(todo);
    return (
        <>
            <h1>ToDO List</h1>
            <div>
                <input placeholder='enter the task'
                    //  onChange={taskData}
                    ref={inputRef} />
                <button onClick={addTask}>add task</button>
                {
                    isUpdate && (
                        // updateRef=useRef();
                        <div>
                            <input ref={updateRef}/>
                            <button onClick={updateTask}>Ok</button>
                             </div>
                    )
                }
                <ul>
                    {todo.map((value, index) => {
                        return (
                        
                        <li key={index}>{value}
                        <button id='deletebtn' onClick={()=>deleteTask(index)}>delete</button>
                        <button id='updatebtn' onClick={()=>{
                            // updateTask(index)
                            setUpdateElement(index);
                            setIsUpdate(true);
                            console.log("updated",isUpdate);
                        }}>Update</button>
                        </li>);
                    })}
                </ul>
            </div>
        </>
    )
}
export default Todo;