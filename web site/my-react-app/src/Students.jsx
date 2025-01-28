// import PropTypes from"prop-types"
function Student(props){
    return(
    <div className="student">
        <p>Name:{props.name}</p>
        <p>Age: {props.age}</p>
        <p>IsStudet: {props.isStudent ? 'Yes':'No'}</p>
    </div>)
}
export default Student
Student.propTypes ={
  name:PropTypes.string,
  age:PropTypes.number,
  isStudent: PropTypes.bool,
}