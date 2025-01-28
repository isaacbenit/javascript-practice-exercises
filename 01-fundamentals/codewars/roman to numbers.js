
function convert(str){
    const roman={
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    let m=0
    let k=Object.values(roman)
    let p=Object.keys(roman)
    let j=0
    for(let i=0;i<str.length;i++){
        if(p.includes(str[i]+str[i+1])){
            let z=str[i]+str[i+1]
            j+=k[p.indexOf(z)]
            str = str.replace(z,'')
            str= str.trim()
            i--
        }
        if(!p.includes(str[i]+str[i+1])){
            j+=k[p.indexOf(str[i])]
            str = str.replace(str[i],'')
            i--
        }
        
        console.log(str.split())
    }
    return j
}
console.log(convert('XI'))

