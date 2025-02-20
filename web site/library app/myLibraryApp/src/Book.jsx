import pro from './assets/book one.jpg'
function Book({openForm}){
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
        <img src={pro} alt="profile picture" className='img1' /> <br />
        <button onClick={openForm}>borrow</button>
        <h2 className='title'> {people.name}</h2> <br />
        <p className='text'> {people.profetion} </p><br />
    </div>)
    return(
    <>
    <div>
        <h1> library</h1>
    </div>
    <div>
    {disp}
    </div>
    
    </>
    );

}
export default Book