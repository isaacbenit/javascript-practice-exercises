async function ftch(a,b) {
    return new Promise(async (resolve,reject)=>{
        let k= (await fetch(a))
        let m = (await fetch(b))
        try{
            resolve([k , m])
        }
        catch{reject("one of the fetch didn't work")}
    })
}
async function show() {
    try{
        let z= await ftch('https://jsonplaceholder.typicode.com/users/1',"https://jsonplaceholder.typicode.com/todos")
        let b= await Promise.all( z.map(el => el.json()))
        console.log(b)
    }
    catch(error){
        console.log(error.message)
    }
    
} 
show()

