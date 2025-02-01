function Button2(){
    let count=0;
const handleck = ((e)=>{
    count%2===0? e.target.textContent='ouch!😢🙏🏽':e.target.textContent='click me😁';
    count++
    console.log(count)
})
return(
    <button onDoubleClick={(e)=>handleck(e) }>Click me😁</button>
)
}
export default Button2