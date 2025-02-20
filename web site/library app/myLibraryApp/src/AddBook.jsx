import React, {useState} from "react";
function AddBook(){
    let [name,useName]=useState('');
    let [studentclass,usestudentClass]=useState('');
    let [fullCard,useCard]=useState([]);
    const bookname=(event)=>{useName(event.target.value)}
    const stclass=(event)=>{usestudentClass(event.target.value)}
    let m= 
    <>
    <div card>
        <h1>{name}</h1>
        <h4>{studentclass}</h4>
    </div>
    </>
    function show(){
        // let newname=`${name} ${studentclass} `
        useCard(m)
    }
    return(
        <>
        <input type="text" value={name} onChange={bookname} placeholder="enter name"/>
        <input type="text" value={studentclass} onChange={stclass} placeholder="your class"/>
        <button onClick={show}>create</button>
        {/* <div className="card">
        <p id="paragraph">{fullCard}</p>
        <h4>{studentclass}</h4>
        </div> */}
        
        </>
    )
}
export default AddBook