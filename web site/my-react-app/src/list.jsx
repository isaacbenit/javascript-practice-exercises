function List(){
    const fruits=[  {name:'apple', caloroes:95},
                    {name:'orange',caloroes:45},
                    {name:'bananas',caloroes:105},
                    {name:'coconut',caloroes:159}];
    fruits.sort();
    const listItems=fruits.map((fruit)=><li>{fruit.caloroes}</li>)
    return(listItems)
}
export default List