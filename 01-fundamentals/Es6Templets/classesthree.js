class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    runing(){
    console.log(`this animal named ${this.name} is ${this.age} years old`)
    }

}
class Dog extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed
    }
    run(){
        console.log(`the dog named ${this.name} runes at a speed of ${this.runspeed} km/hr`)
    }
}
let animal = new Animal('goat',15)
animal.runing();
let dog = new Dog('you',23, 15)
dog.run();
dog.runing();

