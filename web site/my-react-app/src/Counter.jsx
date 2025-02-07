import React,{useState} from "react"
function Counter(){

    let [num,setNumb]=useState(0)
    let [color,setcolor]=useState('green')
    let reset=()=>{setNumb(num=0);setcolor('black')}
    let Increment=()=>{setNumb(num =>num+1);setcolor('green')}
    let Decrement=()=>{setNumb(num-=1);setcolor('red')}
    // let colorChange=()=>{setcolor(c=>c=== 'green'? 'red':'green')}



return( 
        <>
        <p style={{color: color}}>number: {num}</p>
        <button onClick={reset}>Reset</button>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button><br />
        {/* <button onClick={colorChange}>change color</button> */}
        </>
        )
}
export default Counter