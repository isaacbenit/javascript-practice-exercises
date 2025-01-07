function zack(){
    let ben = new Promise(resolve,reject)
    {
        let k= Math.random()>0.5
        if (k){
            resolve(`the test was succusessfull`)
        }
        else{
            reject(`the test has failed`)
        }
    }
}
 zack().then((message)=>
{console.log(message)})
 .catch((error)=>{console.log(error)})