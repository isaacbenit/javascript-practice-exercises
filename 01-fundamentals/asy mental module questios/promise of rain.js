let rainycloud=(()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{  resolve('the clouds look rainly')
        },2000)
    })
})
let raining=(()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
            resolve("rain didn't fall")
        },1000) 
    })
})
// rainycloud().then((value)=>console.log(value))
async function show() {
    // let harshcloud= await rainycloud()
    // console.log(harshcloud)
    // let rain= await raining()
    // console.log(rain)
    let run= await Promise.race([rainycloud(),raining()])
    console.log(run)
}
show()