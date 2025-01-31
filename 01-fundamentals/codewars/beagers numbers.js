// function beggars(values,n){
//     if (n===1){
//         let po = [values.reduce((a,b)=>a+b)]
//         return po
//     }

//     let newValue=values.splice(0,n)
//     let p=[]
//     // console.log(newValue)
//     for(let index=0;index<newValue.length;index++){
//                 if(values[index]!= undefined){
//                     p.push(newValue[index]+=values[index])
//                     newValue=newValue.slice(index)
//                 }
//                 // else{
//                 //     values[index]=0
//                 // }
//     // let b=[]
//     //     for(let i=0;i<n;i++){
//     //         if(values[i]===undefined){
//     //             values[i]=0
//     //             b.push(values[i])
//     //         }
//     //         else{b.push(values[i])}
//     //     }
//     //     values=values.slice(n)
//     //     for(let index=0;index<b.length;index++){
//     //         if(values[index]!= undefined){
//     //             b[index]+=values[index]
//     //         }
//     //         else{
//     //             values[index]=0
//     //         }
//         }
//     return p

// }
// console.log(beggars([1,2,3,4],4))


// function beggars(values,n){
//     let b=[]
//         for(let i=0;i<n;i++){
//             if(values[i]===undefined){
//                 b.push(0)
//             }
//             else{b.push(values[i])}
//         }
//         let valuess=values.slice(n)
//         for(let index=0;index<b.length;index++){
//             if(valuess[index]!= undefined){
//                 b[index]+=values[index]
//             }
//         }
//     return b
// }
// console.log(beggars([1,2,3,4,5],3))


function beggars(values,n){
    let newarray=[]
    if(values.length>n){
            for(let i=0;i<n;i++){
                if(newarray[i]===undefined){
                    newarray[i]=0
                }
                console.log(newarray[i])
                newarray[i]+=values[i]
            }
            values=values.splice(n)
            console.log(values)
        }

    
    return newarray
}
console.log(beggars([1,2,3,4,5],9))


