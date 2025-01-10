function divide(disor,denominator){
    new Promise ((resolve,reject)=>{
        if (denominator === 0){
            reject(`the denominator should not be equal to 0`)
        }
        else{
            let c= disor/denominator
            resolve(`the answer to ${disor} / ${denominator} = ${c} `)
        }
    })
}
async function show() {
    const 
    
}