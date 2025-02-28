import { useState } from "react"
import axios from 'axios';
function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function handleSubmit(event){
        // event.preventDefault();
        axios.post('http://localhost:4000/',{email, password})
        .then(res =>console.log(res)
        .catch(err => console.log(err))
    );
        
    }
    return(
        <>
        <br />
        <input type="text" placeholder="enter name" onChange={e=>setEmail(e.target.value)}/>
        <br />
        <input type="text" placeholder="enter password" onChange={e=>setPassword(e.target.value)}/>
        <br />
        <button onClick={handleSubmit()}>create account</button>
        <p>``password is: ${password}</p>
        </>
    )
}
export default Login