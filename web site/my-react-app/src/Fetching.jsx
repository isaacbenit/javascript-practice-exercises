import React,{useState} from "react";

function Fetching(){
    const [users,setusers]=useState([])
    let p = fetch("https://jsonplaceholder.typicode.com/users/")
    .then((value) => value.json())
    .then((data) =>   {
      for (i = 0; i < data.length; i++) {
        if (data[i].username === "Bret") {
          console.log(data[i].email);
        }
      }
    });
      
return(
    <>
    <p>isaac</p>
    <button onClick={display}>show data</button>
    <p>{users}</p>
    </>
)
}
export default Fetching