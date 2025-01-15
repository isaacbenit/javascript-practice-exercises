// setTimeout(()=>{
//     function check(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//               resolve('Success')
//               reject('failure') 
//             },2000)
//         })
        
//     }
//     check().then((value => console.log(value)))
//     .catch( error => console.log(error))
// },0)




fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=> response.json())
    .then(data=> console.log(data))
    .catch(error => console.error(error))