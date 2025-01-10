function divide(disor,denominator){
    return new Promise ((resolve,reject)=>{
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
    try{
    const divedeshow = await divide(10, 0);
    console.log(divedeshow)}
    catch(value){
        console.log(value)
    }
}
show()