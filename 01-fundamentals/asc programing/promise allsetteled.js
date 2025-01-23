let firstcolor=new Promise((resolve,reject)=>{
        setTimeout(()=>{ reject('red')},1000)
       
    })

let secondcolor = new Promise((resolve,reject)=>{
    setTimeout(()=> {resolve('blue')},2000) })

// Promise.all([firstcolor,secondcolor]).then()
async function call() {
    try{
    const allcolors= await Promise.race([firstcolor,secondcolor]);
    //  allcolors.forEach(color=>{
    //     // console.log(color)
    // })
    console.log(allcolors)}
    catch(error){
        console.log(error.message)
    }

}
call()
