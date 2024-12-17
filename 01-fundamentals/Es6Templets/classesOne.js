class Products {
 static count=0;
    constructor(name,price){
        this.name=name
        this.price=price
        Products.count++
    }
    display(){
        console.log('isaac')
        console.log(`Your product is ${this.name} and it's price is ${this.price}rwf`)
    }
    tax(salesTax){
        let p= this.price + (this.price * salesTax);
        console.log(`the tax for the product is ${p.toFixed(2)}`)
    }
}
const salesTax= 0.05 ; 
let product1= new Products('shoes',12502)
product1.display();
product1.tax(salesTax);
console.log(Products.count);

let k='1234'
let m=k.split('')
console.log(m.sort((a,b)=>b-a))