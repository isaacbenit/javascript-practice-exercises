import React,{useContext} from "react"
import { UserContext } from "./ComponentA"
import ComponentD from "./ComponentD"
function ComponentC(){
    const user= useContext(UserContext)
    return(<div className="box">
        <h2>componentC</h2>
        <h3>{`Hello again ${user}`}</h3>
        <ComponentD/>
    </div>)
}
export default ComponentC