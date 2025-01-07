// Create a class Product with properties name (string), price (number), 
// and methods: getDetails(): Returns a string representation of the product details 
// (name and price). applyDiscount(discount): 
// Applies a discount (percentage) to the product's price and returns the discounted price.

class Product{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    getDetails(){
        console.log(`the name of the product is${this.name} and the price is ${this.price}`)
    }
    applyDiscount(discount){
       let  pricediscount= this.price*discount
        return`the price with discount of specifide is ${pricediscount}`
    }
}
let newProduct= new Product('bananas',560)
console.log(newProduct instanceof Product)
newProduct.getDetails()
// discount=0.5
console.log(newProduct.applyDiscount(10/100))
