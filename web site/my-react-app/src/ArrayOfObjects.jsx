import React,{useState} from "react";
function ArrayOfObject(){
    const[car,setCar]=useState([]);
    const[caryear,setcarYear]=useState(new Date().getFullYear());
    const[carName,setCarName]=useState('');
    const[carModule,setCarModule]=useState('');
    let carsyear= ((e)=>setcarYear(e.target.value))
    let carsName=((e)=>setCarName(e.target.value))
    let carsModule=((e)=>setCarModule(e.target.value))

    function updateCars(){
        newCars={
        year:caryear,
        make:carName,
        module:carModule};

        setCar(c=> [...c,newCars])
    }
    return(
        <>
        <h2>new list of cars </h2>
        <ul>
         {car.map((ele,index) => <li key={index}>{ele.year}{ele.make}{ele.module}</li>
          )}
        </ul>
        <input type="number" value={caryear} onChange={carsyear} /> <br />
        <input type="text" value={carName} onChange={carsName} /> <br />
        <input type="text" value={carModule} onChange={carsModule} />
        <button onClick={updateCars}>add car</button>
        </>
    )
}
export default ArrayOfObject