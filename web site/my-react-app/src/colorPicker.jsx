import React,{useState} from "react"
function ColorPicker(){
    const [color,setcolor]=useState('#ffffff')
    function changeColor(event){
        setcolor(event.target.value)
    }
    return(
        <>
        <label>select color</label>
        <input type="color" value={color} onChange={changeColor} />
        <p style={{backgroundColor: color}}>my name is isaac and the selecte color is {color} </p>
        </>
    )
}
export default ColorPicker