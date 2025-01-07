// Arrow Function Magic: We need a function to calculate the area of a rectangle. 
// Write a concise arrow function calculateArea(width, height) that returns the product of width and height.
//  (Bonus: Can you create an arrow function to check if a number is even or odd?)

// let area=(width,height)=>{
//  return width*height
// }
// console.log(area(5,9));


// let ntype=(n)=>{
//     if(n%2===0){
//         return 'the number is even'
//     }
//     else{
//         return 'num is odd'
// //     }
// // }
// console.log(ntype(56))


let Area=((width,height)=> width*height)
console.log(Area(5,9));


let numtype=((n)=> n%2==0 ? 'num is even':'num is odd')
console.log(numtype(4))