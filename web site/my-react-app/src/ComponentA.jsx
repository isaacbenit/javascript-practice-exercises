import React,{useState,createContext} from "react";
import ComponentB from "./ComponentB"
export const UserContext= createContext()
function ComponentA(){
    const [user,setUser]=useState('isaac')
  return(  <div className="box">
            <h2>ComponentA</h2>
            <h3>{`Hello ${user}`}</h3>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        
    </div>)
}
export default ComponentA