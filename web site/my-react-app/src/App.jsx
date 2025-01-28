import Student from './Students.jsx'
function App() {
  
  return(
  <>
  <Student name ='isaac' age={'30'} isStudent={true}/>
  <Student name ='Patric' age={42} isStudent={false}/>
  <Student name ='squidward' age={50} isStudent={false}/>

  </>
  );
}

export default App
