// function sum(a,b){
//     return new Promise((resolve,reject)=>{
//         let c= a+b
//     resolve( c)
//     })
// }
// function mult(c){
//     return new Promise ((resolve,reject)=>{
//         let d= Number(c*2)
//         resolve(d)
//     })
// }
// function reduce(d){ 
//     return new Promise((resolve, reject)=>{
//         let k= d*5
//         resolve(`the number ${k}`)
//     })
 
// }
// // sum(2,3).then((value)=> {console.log(value); mult()}).then((value)=> console.log(mult((value)=> console.log(value))))

// async function results() {
//   const sumreslt = await sum(2,3) 
//   console.log(sumreslt) 
//   const multreslt =await mult(sumreslt)
//   console.log(multreslt)
//   const reducerelst = await reduce(multreslt)
//   console.log(reducerelst) 
// }
// results()
async function add(a,b) {
  return new Promise((resolve,reject)=>{
    let c=a+b  
    resolve(c)
  })
}
async function mult() {
  const p = await add(2,3)
  console.log(`the sum of two numbers is ${p}`)
  return new Promise((resolve,reject)=>{ 
    resolve(p*5)
  })
}
async function sub() {
  const m= await mult()
  console.log(`the multiple of the previous numb by 5 is ${m}`)
  console.log(`num reducted 5 on it is ${m-5}`)
}
sub()