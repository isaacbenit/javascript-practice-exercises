function isPP(n){
    let z=2
    let prefect=false
    let check=0
   if(n>1000){
    z=8
   }
   if(n>10000){
    z=30
   }
   for(let i=2;i<=n/z;i++){
    for(let x=2;x<=n;x++){
        check = i**x
        if(check===n){
            prefect=true
            return[i,x]
            
        }
    }
   }
   if(prefect===false){
    return `${n} isn't a perfect number`
   }
  }
  console.log(isPP(90000))

//  let  isaac = {
//     name:'benit'
//   }
//   console.log(Object.hasOwn(isaac,'name'))
//   console.log(isaac.name)