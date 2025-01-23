// let promise1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('1')
//         },2000)
//     })
    
// let promise2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('2')
//         },1000)
//     })
   
// async function show() {
//     let p = await Promise.race([promise1,promise2])
//     console.log(p)
// }
// show()
function fun1(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1')
    },2000)
})
}
function fun2(){
    return  new Promise(async(resolve,reject)=>{
    setTimeout(()=>{
        resolve('2')
    },1000)
})
}

async function show() {
let p = await Promise.race([fun1(),fun2()])
console.log(p)
}
show()
