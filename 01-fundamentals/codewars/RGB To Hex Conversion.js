function rgb(r,g,b){
    let red=r.toString(16).padStart(2,'0')
    let green=g.toString(16).padStart(2,'0')
    let blue=b.toString(16).padStart(2,'0')
    return `${red}${green}${blue}`
}
console.log(rgb(233,42,244))