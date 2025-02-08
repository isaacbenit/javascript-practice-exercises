import React, {useState} from "react";
function FormName(){
let [name,useName]=useState('');
let [email,useEmail]=useState('');
let [passoword,usePassowrd]=useState('');
let [fullname,useFullname]=useState([])
const realName=(event)=>{useName(event.target.value)};
const realEmail=(event)=> {useEmail(event.target.value)};
const realPassoword=(event)=> {usePassowrd(event.target.value)};
function show(){
    let newname=` ${name} ${email} ${passoword}`
    useFullname(f=>[...f,newname])
}
return(
    <>
    <input type="text" value={name} onChange={realName} placeholder="enter name"/>
    <input type="text" value={email} onChange={realEmail} placeholder="enter email"/>
    <input type="text" value={passoword} onChange={realPassoword} placeholder="enter password"/>
    <button onClick={show}>display data</button>
    <p id="paragraph">{fullname}</p>
    
    </>
)
}
export default FormName