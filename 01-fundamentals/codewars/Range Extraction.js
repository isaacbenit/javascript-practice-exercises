// // solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20
//    function solution(a){
//     let m=[]
//     let real=[]
//     for(let i=0;i<a.length;i++){
//         if(a[i]-a[i+1]===-1||a[i]-a[i+1]===1){
//             m.push(a[i],a[i+1])
//         }
//         else{
//             m.push(a[i])
//         }
//     }
//     return m
// }
// console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

function solution(list){
    let output = []
    let combine = ''
    for(let i = 0; i < list.length; i++){
        if((list[i] === list[i + 1] -1) && (list[i] === list[i + 2] -2)){
            if(combine.length === 0) {
                combine += `${list[i]}-`
            } else {
                continue
            }
        } else if((list[i] === list[i + 1] -1) && combine !== ''){
            console.log(list[i + 1]-1)
            combine += list[i + 1]
            output.push(combine)
            combine = ''
            i += 1
        } else if(combine !== ''){
            combine += list[i]
            output.push(combine)
            combine = ''
        } else {
            output.push(list[i])
        }
    }
    return output.join(',')
}
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));