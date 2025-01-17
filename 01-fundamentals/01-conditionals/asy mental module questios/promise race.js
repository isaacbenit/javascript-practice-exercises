let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('1')
        },2000)
    })
    
let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('2')
        },1000)
    })
   
async function show() {
    let p = await Promise.race([promise1,promise2])
    console.log(p)
}
show()