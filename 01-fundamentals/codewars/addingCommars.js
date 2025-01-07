// function commas(num){
//     num= `${num}`.split('.')
//     let decimalnum=num[1]
//     let Newnum=num[0]
//     let p=[];
//     Newnum = Newnum.toString().split('').reverse()
//     for(i=0;i<Newnum.length;i++){
//         if((i%3)===0 && i>1){
//         p.push(Newnum[i]+',')
//          continue
//         }
//         p.push(Newnum[i])
//     }     
//     let mn= `${p.reverse().join('') +Math.round(Number('0.'+decimalnum)*1000)/1000}`
//    return mn
//   }
//   console.log(commas(14535.434))

  function commas(num){
    let numercheck=num.toString().split('')
    if(numercheck.includes('.')){
    num= `${num}`.split('.')
    let decimalnum=num[1]
    let Newnum=num[0]
    let p=[];
    Newnum = Newnum.toString().split('').reverse()
    for(i=0;i<Newnum.length;i++){
        if(Newnum[i]==='-'){
            p.push('-')
            continue
        }
        if((i%3)===0 && i>1){
        p.push(Newnum[i]+',')
         continue
        }
        p.push(Newnum[i])
    }         
   return `${p.reverse().join('') +(`${Math.round(Number('.'+decimalnum)*1000)/1000}`).slice(1)}`}
   else{
    let array=[];
    num = num.toString().split('').reverse()
    for(i=0;i<num.length;i++){
        if(num[i]==='-'){
            array.push('-')
            continue
        }
        if((i%3)===0 && i>=1){
        array.push(num[i]+',')
         continue
        }
        array.push(num[i])
    }         
   return array.reverse().join('')
   }
  }
  console.log(commas((-100000.123)))
