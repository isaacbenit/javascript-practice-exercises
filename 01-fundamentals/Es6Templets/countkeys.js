// function countKeys(a){
//     console.log(Object.keys(a).length)
// }

// countKeys({ name: "Alice", age: 25, city: "Paris" })
// countKeys({});

// function mergeObjects(a,b){
//     let k={...a,...b}
//     console.log(k)
// }
// mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
// // { a: 1, b: 3, c: 4 }
// mergeObjects({ x: "hello" }, { y: "world", x: "hi" });
// // { x: "hi", y: "world" }

let a=([['a',1],['b',2 ], ['b', 3],['c',4]])
console.log(Object.fromEntries(a))
// let b=[23,61,16,16]
// console.log(b.filter((a)=> a>20))


