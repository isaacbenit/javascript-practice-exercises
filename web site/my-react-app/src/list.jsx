import PropTypes from 'prop-types'
function List(props){
    const itemlist=props.items;
    const category=props.category;
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));
    // fruits.sort((a,b)=> b.caloroes - a.caloroes)
     
    const listItems=itemlist.map((item)=><li key={item.id}>
                                            {item.name}:&nbsp;
                                            {item.caloroes}</li>)
    return( 
            <>
            <h3 className="list-category">{category}</h3>
            <ul className="listnames">{listItems}</ul>
            </>
            )
}
List.defaultProps ={
    category:'no specified category',
    items:[],
}
List.prototype={
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name:PropTypes.string,
                                            caloroes:PropTypes.number,
    })),
}
export default List