/* Write a JavaScript program to find the Armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. */
function zack() {
    for (let i=0;i<10;i++) {
        for (let b=0;b<10;b++){
            for(let z=0;z<10;z++) {
                let a =Math.pow(i,3)+ Math.pow(b,3)+ Math.pow(z,3);
                let num= i * 100 + b + 10 + z ;
                if (a==num){
                    console.log(a);
                }
            }
        }
    }
}
console.log(zack());