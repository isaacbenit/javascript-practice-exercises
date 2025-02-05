import React,{useState} from "react"
function FavorateCar(){
    const[car, setcar]=useState({year:'',make:'',module:''});
    const carYear=(event)=>{setcar(c=>({...c,year:event.target.value}))}
    const carmake=(event)=>{setcar(m=>({...m,make:event.target.value}))}
    const carmodule=(event)=>{setcar(M=>({...M,module:event.target.value}))}
    return(<>
        <input type="number" value={car.year} onChange={carYear} />
        <input type="text" value={car.make} onChange={carmake} />
        <input type="text" value={car.module} onChange={carmodule} />
        <p>my favorate car is {car.year} {car.make} {car.module}</p>
        </>
    )
}
export default FavorateCar