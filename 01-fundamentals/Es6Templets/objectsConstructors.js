function People(name,age,location){
    this.name=name,
    this.age=age,
    this.location=location,
    this.great = function(){console.log(`Hello ${this.name}`)}
}

let person1= new People('isaac', 20,'kigali')
console.log(person1.name[0].toUpperCase()+person1.name.slice(1))
person1.great()