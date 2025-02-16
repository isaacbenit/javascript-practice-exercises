function stringMerge(string1, string2, letter){
    let fullWord=[]
    for(i of string1){
        if(i!==letter){
            fullWord.push(i)
        }
        else{
            break
        }
    }
    for(let i=0;i<string2.length;i++){
        // if(string2[i]===letter){
        //    let m=string2.slice(i,string2.length)
        //    fullWord.push(m)
        //    break
        // }
    }
    return fullWord.join('')
  }
  console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"))