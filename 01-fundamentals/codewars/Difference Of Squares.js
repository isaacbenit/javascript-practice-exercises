// Difference Of Squares
function dsum(k){
    let a=[]
    for(i=1;i<=k;i++){
        a.push(i)
    }
    let b=a.map((a)=>a**2)
    let c=b.reduce((a,b)=> a+b)
    let d=a.reduce((a,b)=> b+a)
    let p=d**2
    let e= p-c
    return e
}
console.log(dsum(5))