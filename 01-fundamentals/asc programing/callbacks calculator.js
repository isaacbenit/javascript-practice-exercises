function calc(a,b,callback){
    let c=`the sum of the numbers is: ${a+b}`
    let e=`the multiplication of the numbers is: ${a*b}`
    let d=`the division of the numbers is: ${a/b}`
    callback(c)
    callback(e)
    callback(d)
}
function print(value){
    console.log(value)
}
calc(10,5,print)