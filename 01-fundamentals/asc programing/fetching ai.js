let check=(()=>{
    return new Promise((resolve, reject)=>{
        try{
        resolve(fetch('https://jsonplaceholder.typicode.com/users/1'))}
        catch{
            reject('the fetch failed')
        }
    })
})
async function show() {
    try{
    let check1= await check()
    let k= await check1.json()
    console.log(k.username,k.email)
}
catch(error) {
    // let check1= await check()
    console.log(error.message)
}
    
}
show()