import Student from './Students.jsx'
import UserGreeting from'./UserGreeting'
import List from './list.jsx'
function App() {

  return(
  <>
  <Student name='isaac' age={23} isStudent={false}/>
  <UserGreeting isLoggedIn={true} username='isaac'/>
  <UserGreeting isLoggedIn={false} username='isaac'/>
  <UserGreeting isLoggedIn={true} />
  <List/>
  </>
  );
}
export default App
