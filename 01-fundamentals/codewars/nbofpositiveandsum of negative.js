function countPositivesSumNegatives(...input) {
    let k=0
    let p=0
   for (value of input){
    if(value>0){
        k++
    }
    else{
        p+=value
    }
   }
   console.log([k,p])
  }
  countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])