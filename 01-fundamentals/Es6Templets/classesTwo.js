class Cars{
    new=true;
    
    move(){
        console.log(`${this.name} is being driven`)
    }
    parked(){
        console.log(`${this.name} is parked `)
    }
}
class Toyota extends Cars{
    name='Toyota'
}
class Audi extends Cars{
    name='Audi'
}
class Bentley extends Cars{
    name='Bentley'
    movingfast(){
        console.log(`${this.name} can move at 1289km/hr`)
    }
}
let toyota= new Toyota();
let audi= new Audi();
let bentley= new Bentley();
// toyota.new=false;
console.log(toyota.new)
toyota.move();
toyota.parked();
audi.move();
audi.parked();
bentley.movingfast();