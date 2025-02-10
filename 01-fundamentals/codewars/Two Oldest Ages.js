function twoOldestAges(ages){
    return ages=ages.sort((a,b)=>b-a).slice(0,2).sort((a,b)=>a-b)
    }
console.log(twoOldestAges([1, 3, 10, 0] ))
    