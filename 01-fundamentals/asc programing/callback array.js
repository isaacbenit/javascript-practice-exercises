function arraychange(arr,callback){
    let modarr=[]
    let grtarr=[]
    for(num of arr){
        if(num%2===0){
            modarr.push(num)
        }
        if(num>5){
            grtarr.push(num)   
        }
    }

    callback(modarr)
    callback(grtarr)
}
function disp(data){
    console.log(data)
}
arraychange([10,3,2,4,5,6,7,8,9],disp)