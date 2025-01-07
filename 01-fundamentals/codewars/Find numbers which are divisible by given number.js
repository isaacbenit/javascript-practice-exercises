function divisibleBy(numbers, divisor){
    let z=[];
    for (value of numbers){
        if (value % divisor === 0){
            z.push(value)
        }
    }
    return z
    // let z=[];
    // for (let i=0;i<numbers.length;i++){
    //   z.push(numbers[i] % divisor=== 0)}
    //   return z;
  }
  console.log(divisibleBy([1,2,34,5,6,54],2));

 
  
  