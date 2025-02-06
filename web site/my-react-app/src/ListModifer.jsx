import React,{useState} from "react";
function ListModifer(){
    const[foods,setfoods]= useState(['apple','orange','bananas','mangos','arrarrr']) 
    const showList= foods.map((foods,index)=><li key={index} onClick={()=>handleRemove(index)}>{foods}</li> )
    function addElement(){
        let newFood=document.getElementById('input').value;
        document.getElementById('input').value="";
        setfoods(f => [...f,newFood])
    }
    function handleRemove(index){
      setfoods(foods.filter((_,i)=> i!==index))
    }
    return(
        <div>
        <h2>list of foods</h2>
        <ul>
            {showList}
        </ul>
        <input type="text" id="input" placeholder="enter food name" />
        <button onClick={addElement}>addfood</button>
        </div>
    )
}
export default ListModifer;