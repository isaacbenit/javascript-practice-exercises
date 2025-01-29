function List(){
    const fruits=[  {id: 1,name:'apple', caloroes:95},
                    {id: 2,name:'orange',caloroes:45},
                    {id: 3,name:'bananas',caloroes:105},
                    {id: 4,name:'coconut',caloroes:159}];
    fruits.sort((a,b)=> b.name.localeCompare(a.name));
    fruits.sort((a,b)=> b.caloroes - a.caloroes)
     
    const listItems=fruits.map((fruit)=><li key={fruit.id}>
                                            {fruit.name}:&nbsp;
                                            {fruit.caloroes}</li>)
    return(listItems)
}
export default List