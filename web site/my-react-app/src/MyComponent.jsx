import React,{useState} from "react"
function MyComponent(){
    const [name,setName]=useState('guest');
    const updateName=()=>{ setName(" Spongeboo")}
    const [age, setAge]=useState(0)  
    const updateAge=()=>{setAge(age + 1)}
    const [fname,setFname]=useState('')
    const handleChange=(event)=>{setFname(event.target.value.toUpperCase())}
    return(
        <div>
            <p>name:{name}</p>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Set Name</button>
            <input type="text" value={fname}  onChange={handleChange} />
            {/* <p> fname: {fname}</p> */}
        </div>
    )
}
export default MyComponent
