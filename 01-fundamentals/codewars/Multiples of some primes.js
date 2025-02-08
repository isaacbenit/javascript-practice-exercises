function findThem(numberLimit, primes) {
    let sum=0;
    if(numberLimit>0){
        for(i=1;i<numberLimit;i++){
            // for(pr=0;pr<primes.length;pr++){
           
                if(i<primes.length){
                    
                    if(typeof(primes[i]=== 'bigint')){
                        primes[i]=Number(primes[i])
                        console.log(primes[i],i)
                    }
                    if(i%primes[i]===0){
                        sum+=i
                        // i=i+(primes.length-1)
                    }
                }
                
            // }
        }
        return BigInt(sum)
    }
    else{ return 0}
}
console.log(findThem(10n, [3n,5n]))
