// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
// function disp(){
//        let b= setInterval(function disp(){console.log(2)},2000)
//         setTimeout(()=>{
//             clearInterval(b)
//         },5000)
// }
// disp()
function timer(){
    let b = setInterval(()=>{
        console.log('2 sec')
    },2000)
    setTimeout(()=>{
        clearInterval(b);
    },5000)
}
timer()
