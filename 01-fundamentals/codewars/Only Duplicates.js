// input: "abccdefee"
function duplicates(value){
    let recieve=[]
    let b=value.split('')
    for(index of value){
        for(x of value){
            if(index===x){
                recieve.push(index)
            }
        }
    }
    return recieve
}
console.log(duplicates("abccdefee"))