function loop(callback){
    for (let i=0;i<6;i++){
        callback(i)
    }
}
function results(i){
    setTimeout(()=>{
        console.log(i)
    },1000*i)  
}

loop(results).then(()=>)