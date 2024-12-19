function commas(num){
    let p=[];
     num = num.toString().split('').reverse()
     console.log(num)
    for(i=0;i<num.length;i++){
        if(num[i]=== '.' ){
            
            i=num.length;
        }
        else if((i%3)===0 && i>1){
        p.push(num[i]+',')
         continue
        }
    }
        p.push(num[i])
              
   return p.reverse().join('')
  }
  console.log(commas(100.2346))
