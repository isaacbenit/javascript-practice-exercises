function check(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('Success')
          reject('failure') 
        },1000)
    })
    
}
check().then((value => console.log(value)))
.catch( error => console.log(error))