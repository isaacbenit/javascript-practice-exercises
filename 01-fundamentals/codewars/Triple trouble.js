function tripledouble(num1, num2) {
    let check=0
    let number=[]
    num1=num1.toString()
    num2=num2.toString()
    for(let i=0;i<num1.length;i++){
        if (num1[i]===num1[i+1] && num1[i]===num1[i+2]){
            number.push(num1[i])
            check=1
        }  
    }
    for(let a=0;a<num2.length;a++){
        if (num2[a]===num2[a+1] && number.includes(num2[a])){
            check=2
        }  
    }
    if(check===2){
        return 1;
    }
    else{
        return 0
    } 
}
console.log(tripledouble(5914733313337773, 654473336))