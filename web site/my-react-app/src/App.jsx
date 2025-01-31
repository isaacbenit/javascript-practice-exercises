import Card from './card.jsx'
import Student from './Students.jsx'
import UserGreeting from'./UserGreeting'
import List from './list.jsx'
import Button2 from './Button2.jsx'
function App() {

  const fruits=[  {id: 1,name:'apple', caloroes:95},
    {id: 2,name:'orange',caloroes:45},
    {id: 3,name:'bananas',caloroes:105},
    {id: 4,name:'coconut',caloroes:159}];
  const vegetables=[  {id: 1,name:'grass', caloroes:95},
      {id: 3,name:'patato',caloroes:45},
      {id: 4,name:'onion',caloroes:105},
      {id: 5,name:'Qucomber',caloroes:159}];

  return(
  <>
  <Button2/>
  <Card/>
  <Student name='isaac' age={23} isStudent={false}/>
  <UserGreeting isLoggedIn={true} username='isaac'/>
  <UserGreeting isLoggedIn={false} username='isaac'/>
  <UserGreeting isLoggedIn={true} />
  {fruits.length>0 && <List items={fruits} category='Fruits'/>}
  <List items={vegetables} category='vegis'/>
  </>
  );
}
export default App
