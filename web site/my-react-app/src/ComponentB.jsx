import ComponentC from "./ComponentC"
function ComponentB(){
    return(<div className="box">
        <h2>ComponentB</h2>
        <ComponentC/>
    </div>)
}
export default ComponentB