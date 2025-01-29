import pro from './assets/profile.jpg'

function Card(){
    const ids=[
        {   img: pro,
            name:'Isaac',
            profetion: 'I make youtube videos',
        },
        {   img:pro,
            name:'...',
            profetion: 'Hallo',
        }
    ]
    let disp= ids.map(people=> 
    <div className='card'>
        <img src={people.img} alt="profile picture" className='img1' /> <br />
        <h2 className='title'> {people.name}</h2> <br />
        <p className='text'> {people.profetion} </p><br />
    </div>)
    return(disp);
}
export default Card