function transformString(text, callback1, callback2) {
    callback1(text)
    callback2(text)
}
function revs(z){
    let m= z.split('').reverse().join('')
    
    console.log(m)
}
function upperc(k){
    let b=k.toUpperCase()
    console.log(b)
}
transformString('isaac',revs, upperc)

// let a='isaac'
// let b = a.split('').reverse()
// console.log(b.join(''))