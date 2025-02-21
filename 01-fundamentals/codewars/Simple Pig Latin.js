// function pigIt(str){
//     let allword=[]
//     str=str.split(' ')
//    for(let i=0;i<str.length;i++){
//     if(str[i]!=='!' && str[i]!=='?'){
//         // console.log(str[i])
//     let one=str[i].slice(0,1)
//     let two=(str[i].slice(1,str[i].length))
//     allword.push(two+one+'aya')
  
//     }
//     else{
//         allword.push(str[i])
//     }
// }
// return allword.join(' ')
//   }
//   console.log(pigIt('This is my string !'))
let pigIt = str => str=str.split(' ').map((a)=> a!='!'&& a!='?' ?a.slice(1,str.length)+a.slice(0,1)+'aya':a).join(' ')


console.log(pigIt('This is my string ?'))