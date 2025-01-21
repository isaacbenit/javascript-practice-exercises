import profilepc from './assets/profile.jpg'
function Card(){
    return(
    <div className="card">
        <img src={profilepc} alt="profile picture" className='img1' />
        <h2 className='title'>Isaac</h2>
        <p className='text'> I make youtube videos</p>
    </div>
    );
}
export default Card