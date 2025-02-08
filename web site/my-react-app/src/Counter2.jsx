import React,{useState} from "react";
function Counter2() {
    const [count, setCount] = useState();
    return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={setCount(count + 1)}>Increment</button>
    </div>
    );
    }
    export default Counter2