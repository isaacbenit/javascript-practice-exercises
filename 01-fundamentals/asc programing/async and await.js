function sum(a,b){
    return new Promise((resolve,reject)=>{
        let c= a+b
    resolve( c)
    })
}
// function mult(c){
//     return new Promise ((resolve,reject)=>{
//         let d= Number(c*2)
//         resolve(`the answer *2 = ${Number(d)}`)
//     })
// }
// function reduce(d){ 
//     return new Promise((resolve, reject)=>{
//         let k= d*3
//         resolve(`the number ${k}`)
//     })
 
// }
// sum(2,3).then((value)=> {console.log(value); mult()}).then((value)=> console.log(mult((value)=> console.log(value))))

async function results() {
  const sumreslt = await sum(2,3) 
  console.log(sumreslt) 
//   const multreslt =await mult(sumreslt)
//   console.log(multreslt)
//   const reducerelst = await reduce(multreslt)
//   console.log(reducerelst) 
}
results()