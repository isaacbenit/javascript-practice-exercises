// let arry=[2,35,6,26,46,26,4,7]
let arry=[2,35,6,Symbol(26),46,Symbol(26),4,7]
let iteration = arry[Symbol.iterator]();
console.log(iteration.next())
console.log(iteration.next())

console.log(arry[3]===arry[5])
// console.log(Symbol(arry[3])===Symbol(arry[5]))