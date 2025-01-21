function numberToPower(number, power){
    let k=[]
      for(let i=1; i<=power; i++){
        k.push(number)
      }
      if(power>0){
      k=k.reduce((a,b)=>a*b)
      return k}
      if(power===0){
        return 1
      }
    }
    console.log(numberToPower(10,0))






