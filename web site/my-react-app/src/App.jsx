import Card from './card.jsx'
import Student from './Students.jsx'
import UserGreeting from'./UserGreeting'
import List from './list.jsx'
import Button2 from './Button2.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './colorpicker.jsx'
import FavorateCar from './FavorateCar.jsx'
import ListModifer from './listModifer.jsx'
import ArrayOfObject from './arrayOfObjects.jsx'
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
  <ProfilePicture/>
  <Button2/>
  <Card/>
  <Student name='isaac' age={23} isStudent={false}/>
  <UserGreeting isLoggedIn={true} username='isaac'/>
  <UserGreeting isLoggedIn={false} username='isaac'/>
  <UserGreeting isLoggedIn={true} />
  {fruits.length>0 && <List items={fruits} category='Fruits'/>}
  <List items={vegetables} category='vegis'/>
  <br />
  <br />
  <hr />
  <MyComponent/>
  <hr />
  <Counter/>
  <br />
  <br />
  <hr />
  <ColorPicker/>
  <br />
  <br />
  <hr />
  <FavorateCar/>
  <hr />
  <ListModifer/>
  <hr />
  <ArrayOfObject/>
  </>
  );
}
export default App
