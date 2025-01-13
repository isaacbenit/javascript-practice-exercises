let firstcolor=new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve('red')},1000)
       
    })

let secondcolor = new Promise((resolve,reject)=>{
    setTimeout(()=> {resolve('blue')},2000) })

// Promise.all([firstcolor,secondcolor]).then()
async function call() {
    const allcolors= await Promise.race([firstcolor,secondcolor]);
    //  allcolors.forEach(color=>{
    //     // console.log(color)
    // })
    console.log(allcolors)
}
call()
