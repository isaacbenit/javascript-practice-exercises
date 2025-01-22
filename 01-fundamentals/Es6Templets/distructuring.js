// Write a function that takes a product object with the following structure:

// Use object destructuring and default parameters to extract the name, price, and stock properties. If stock is not provided, set its default value to 0. The function should return a string like:

// const product = { name: "Phone", price: 800, stock: 10 };
// output: "The product Phone costs $800 and has 10 in stock."

const b={
    name: "Phone",
     price: 800,
      stock: 10 
}
let k = product((a)=>{
    let {name,price,stock=15}=a
    console.log(`the product ${name} cost ${price} and has ${stock} in stock`)
})
console.log(k)

