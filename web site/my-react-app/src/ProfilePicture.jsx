// import pro from './assets/profile.jpg'
function ProfilePicture(){
    const image='./src/assets/profile.jpg';

    const handleClick= (e) => {e.target.style.display='none';}

    return(<img  src={image} className='pro' onClick={(e)=>handleClick(e)}></img>);
}
export default ProfilePicture