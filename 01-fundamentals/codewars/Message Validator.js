function isAValidMessage(message) {
    let z = 0
    if (isNaN(message[message.length - 1])) {
        for (i = message.length - 1; i >= 0; i--) {
            if (isNaN(message[i])) {
                z += 1
                console.log(z)
            }
            if (z < 0) {
                return false
            }
            else if (!isNaN(message[i]) && !isNaN(message[i - 1])) {
                let m = message[i - 1] + message[i]
                z = z - m
                i = i - 1
            }
            else if(i<0){
                return false
            }
            else {
                z = z - message[i];
            }
        }
        return z === 0 ? true : false;
    }
    else {
        return false
        // for(i=0;i<message.length;i++){
        //     if(isNaN(message[i])){
        //         p+=1 
        //     }
        //     else{
        //         p=p-message[i];
        //     }
        // }
        // return p===0?true:false;
    }
}
console.log(isAValidMessage('4code13hellocodewars'))

