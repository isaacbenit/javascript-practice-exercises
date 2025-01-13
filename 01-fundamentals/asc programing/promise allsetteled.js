let firstcolor=new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve('red')},1000)
       
    })

let secondcolor = new Promise((resolve,reject)=>{
    setTimeout(()=> {reject('blue')},2000) })

// Promise.all([firstcolor,secondcolor]).then()
async function call() {
    const allcolors= await Promise.allSettled([firstcolor,secondcolor]);
     allcolors.forEach(color=>{
        // console.log(color)
    })
    console.log(allcolors)
}
call()
