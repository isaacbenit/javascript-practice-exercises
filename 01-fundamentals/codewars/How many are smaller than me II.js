function smaller(arr) {
    //code me
    let z=[]
    let k=0
        while(k<arr.length){
            z.push(arr.filter((n)=>n<arr[0]).length)
            k++
            arr= arr.slice(1)
        }
        // z.push(0)
        return z

 }
 console.log(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]))
