const red =  new Promise ((resolve,reject)=>{
   setTimeout(()=>resolve('red'),1000) 
})

const blue =  new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve('blue'),3000) 
 })

 const white =  new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve('white'),5000 ) 
 })

// red.then((value)=>{
//     console.log(value)
// })
// blue.then((value)=> console.log(value))
const proms = Promise.all([red,blue,white])
proms.then((value)=> console.log(value) )
