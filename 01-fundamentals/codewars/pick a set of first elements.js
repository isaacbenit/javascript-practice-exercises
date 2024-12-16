// function first(arr, n) {
//     let p=[]
//     if (n=== undefined){
//         p.push(arr[0])
//         return p;
//     }
//     let k=arr.slice(0,n);
//     return k;
//   }
//   console.log(first(['a','c',3,45,20,31,12,3],2));
function drawStairs(n) {
    let k='I'
    let p=''
    for(a=0;a<n;a++){
       p+=k.padStart(a+1)+'\n'
       
    }
    return p
    }
    console.log(drawStairs(3));