let moveZeros = ((value)=>{
    let k=[]
    let b=[]
        for(num of value){
            if(num===0){
                k.push(num)
            }
            else{
                b.push(num)
            }
        }
        return [...b,...k]
})

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))