class Students {
    static k=4;
    constructor(name,id){
        this.name=name
        this.id=id
    }
    show(){
        console.log(`the k is ${this.k}`)
    }
}
class Girls extends Students{
    constructor(name,id,gender){
        super(name,id)
        this.gender=gender
    }
    rasting(){
        console.log(`the girl named ${this.name} is rasting ${this.k}`)
    }
}
let s1= new Students()
console.log(Students.k)
// let f1= new Girls('kami',15,'f')
// f1.rasting()
