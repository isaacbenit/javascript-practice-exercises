function fun1(){
    fun2()
console.log(1)}
function fun2(){
    fun3()
    setTimeout(()=>
        {
            console.log(2)
        })
}
function fun3(){
    console.log(3)
    console.log(4)
}

debugger
fun1()
