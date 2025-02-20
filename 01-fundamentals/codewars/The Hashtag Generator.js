function generateHashtag (str) {
    if(str===''){
        return false
    }
    if (str.length>140){
        return false
    }
    let z='#'
    for(let i=0;i<str.length;i++){
        if(str[i]===' ' && str[i+1]!=undefined){
            // k=str[i+1].toUpperCase()
            // console.log(k)
            z=z+(str[i+1].toUpperCase())
            i=i+2
        }
        if(i===0){
            z=z+str[0].toUpperCase()
        }
        else{
           z=z+str[i]
        }
    }
    if (z.length>140){
        return false
    }

return z.replaceAll(' ','')

}
console.log(generateHashtag("Codewars"))