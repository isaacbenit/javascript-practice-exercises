// Set Up Sets and Maps: You're working with a list of product IDs that might contain duplicates.
//  Use a Set to remove all duplicates and return the unique product IDs.

let k=[1,2,3,4,5,5,3,2]
let m= new Set([...k])
console.log(m)
let p=[]
p.push(...m)
console.log(p)