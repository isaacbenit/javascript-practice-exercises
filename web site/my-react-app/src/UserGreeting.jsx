import PropTypes, { bool } from 'prop-types'
function UserGreeting(props){
    const welcomeMessage= <h2 className="welcome-message">Welcome {props.username}</h2>
    const logInPrompt= <h2 className="logIn-message">please log in to continue</h2>
    return(props.isLoggedIn ? welcomeMessage : logInPrompt)
    
    
}
UserGreeting.PropTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps ={
    isLoggedIn: false,
    username:'Guest',
}
export default UserGreeting