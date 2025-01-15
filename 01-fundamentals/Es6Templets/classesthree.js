class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }

}
class Dog extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed
    }
}