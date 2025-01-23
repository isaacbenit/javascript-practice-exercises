// Write a JavaScript function fetchToDo that fetches data from the given
//  URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle 
//  // both successful responses and errors (such as network issues or invalid URLs). 
//  // Upon receiving a successful response,
// //  it should log the fetched data to the console. If there's an error, 
// // it should catch the error and log an appropriate message.
function retrive(data){
    return new Promise((resolve,reject)=>{
        try{
            resolve(fetch(data))
        }
        catch(message){
            console.log(Error.message)
        }
    })
}
async function show() {
    let z = await retrive('https://jsonplaceholder.typicode.com/users/1') 
    let k= await z.json()
    console.log(k)
}
show()
// retrive('https://jsonplaceholder.typicode.com/todos/1').then((response)=> response.json()).then((value)=>console.log(value))