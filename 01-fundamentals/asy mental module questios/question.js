// Write a program that logs "Working..." to the console every second. Stop logging after 5 seconds.

function show(){
    let a=setInterval(()=>{
        console.log("Working...")
    },1000)
    setTimeout(()=>{
        clearInterval(a)
    },5000)
}
show()