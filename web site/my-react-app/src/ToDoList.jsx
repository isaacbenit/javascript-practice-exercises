import React,{useState} from "react";
function ToDoList(){
    const[tasks,setTasks]=useState(["Eat Breakfast","take a shower"]);
    const[newTask,setnewTask]=useState('');
    
    function handleInputChange(event){
        setnewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask])
        setnewTask("")
        }
        
    }
    function deleteTask(index){
        const newEditedTasks= tasks.filter((_,i)=> i!==index)
        setTasks(newEditedTasks)
    }
    function moveTaskUp(index){
        if(index > 0){
        const movingup= [...tasks];
        [movingup[index],movingup[index-1]]=[movingup[index-1],movingup[index]];
        setTasks(movingup)
    }

    }
    function moveTaskDown(index){
        if(index)
    }
    return(
    <>
    <div className="ToDo-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="enter task... "value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>
                Delete
            </button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}>
                Up👆🏽
            </button>
            <button className="move-button" onClick={()=>moveTaskDown(index)}>
                Down👇🏽
            </button>
            </li>)}
            
        </ol>
    </div>
    </>)
}
export default ToDoList