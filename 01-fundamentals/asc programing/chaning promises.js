function checkname (fname){
 return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(fname=='zack'){
            resolve(` the user name is fetched which is ${fname}`)}
            else{
                reject(`the name provided is not correct `)
            }
        }, 1000);
    })
}
function checkId(id,fname){
    return new Promise((resolve,reject)=>
    {  setTimeout(()=>{
        if(id===123){
            resolve(`you have loged in the site`)
        }
        else{
            reject(`you entered a wrong id for the provided username`)
        }
    },1000)
        
    })
}

    checkname('zack').then((value)=> {console.log(value);return checkId(123)})
    .then((value)=> console.log(value))
    .catch(error =>console.error(error));
    
