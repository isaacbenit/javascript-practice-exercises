import React, {useState} from "react";
function FormName({goBack}){
        let [name,useName]=useState('');
        let [email,useEmail]=useState('');
        let [passoword,usePassowrd]=useState('');
        let [fullname,useFullname]=useState([])
        const realName=(event)=>{useName(event.target.value)};
        const realEmail=(event)=> {useEmail(event.target.value)};
        function show(){
            let newname=` ${name} ${email} ${passoword}`
            useFullname(f=>[...f,newname])
            window.location.href={newname}
        }
        return(
            <>
            <input type="text" value={name} onChange={realName} placeholder="enter name"/>
            <input type="text" value={email} onChange={realEmail} placeholder="enter class"/>
            <button onClick={show}>borrow</button>
            <button onClick={goBack}>goBack</button>
            <p id="paragraph">{fullname}</p>
            </>
        )
}
export default FormName