function findThem(numberLimit, primes) {
    let sum=0;
    if(numberLimit>0){
        for(i=1;i<numberLimit;i++){
            for(pr=0;pr<primes.length;pr++){
                if(typeof(primes[pr]=== 'bigint')){
                    primes[pr]=Number(primes[pr])
                }
                if(i%primes[pr]===0){
                    sum+=i
                    pr=pr+(primes.length-1)
                }
            }
        }
        return BigInt(sum)
    }
    else{ return 0}
}
console.log(findThem(10n, [3n,5n]))
