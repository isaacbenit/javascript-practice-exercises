function maxGem(costs,budget){
    costs=costs.sort((a,b) => a-b)
    let k=0
    let count=1
    for(let i=0;i<costs.length;i++){
        // console.log(a[i])
        k=costs[i]+costs[i+1]
        if(k<budget){count=count+1}
        if(k>budget){count=0;}
    }
    return count
}
console.log(maxGem([1, 6, 3, 1, 2, 5], 20))