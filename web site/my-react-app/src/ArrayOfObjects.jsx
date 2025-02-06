import React,{useState} from "react";
function ArrayOfObject(){
    const[car,setCar]=useState([]);
    const[caryear,setcarYear]=useState(new Date().getFullYear());
    const[carName,setCarName]=useState('');
    const[carModule,setCarModule]=useState('');
    let carsyear= ((e)=>setcarYear(e.target.value))
    let carsName=((e)=>setCarName(e.target.value))
    let carsModule=((e)=>setCarModule(e.target.value))
    function changecar(){
        newCars={
        year:caryear,
        make:carName,
        module:carModule};

        setCar([...car,newCars])
    }
    const showCar=car.map((c,index)=> <li key={index}>{c.year}{c.make}</li>)
    return(
        <>
        <h2>new list of cars </h2>
        <ul>{showCar} </ul>
        <input type="number" value={caryear} onChange={carsyear} /> <br />
        <input type="text" value={carName} onChange={carsName} /> <br />
        <input type="text" value={carModule} onChange={carsModule} />
        <button onClick={changecar}>add car</button>
        </>
    )
}
export default ArrayOfObject