function commas(num){
    let p=[];
     num = num.toString().split(',').join(' ').split('.').join(' ').reverse()
    for(i=0;i<num.length;i++){
        if((i%3)===0 && i>1){
        p.push(num[i]+',')
         continue
        }
        p.push(num[i])
    }
   return p.reverse().join('')
  }
  console.log(commas(10,0.2,346))

 