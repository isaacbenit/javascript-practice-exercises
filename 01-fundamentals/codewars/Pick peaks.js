// function pickPeaks(arr){
//     let a={pos:[],peaks:[]}
      
//       for(let j=arr.length;j>0;j--){
//         if(arr[j]>arr[j+1]&&arr[j]>arr[j-1]){
//             a.pos=[arr[j],j]
//             if(arr[j]===arr[j+1] && arr[j]>arr[j-1]){
//                 a.pos=[j]
//               }
//             break
//         }
//         else if(arr[j]===arr[j-1] && arr[j]>arr[j+1]){
//             a.pos=[arr[1]]
//           }
//         else{
//             a.pos=[]
//           }
//       }

//       for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
//           a.peaks=[arr[i],i]
//           if(arr[i]===arr[i-1] && arr[i]>arr[i+1]){
//             a.pos=[arr[i]]
//           }
//           break
//         }
//         else if(arr[i]===arr[i+1] && arr[i]>arr[i-1]){
//           a.peaks=[arr[0]]
//         }
//         else{
//           a.peaks=[]
//         }
//       }
      
//      return a
//     }
//   console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
sd=(x) => ( Number(x.toString().split().map(n => n**2)))
 console.log(sd(6))