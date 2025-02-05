import React,{useState} from "react"
function Counter(){

    let [num,setNumb]=useState(0)
    let reset=()=>{setNumb(num=0)}
    let Increment=()=>{setNumb(num =>num+1)}
    let Decrement=()=>{setNumb(num-=1)}



return( 
        <>
        <p>number: {num}</p>
        <button onClick={reset}>Reset</button>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </>
        )
}
export default Counter