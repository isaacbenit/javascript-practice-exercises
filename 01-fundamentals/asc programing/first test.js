function getWeather(){
    return new Promise(function(resolve,reject){
        resolve('Sunny')
    })
}
// function onSuccess(data){
//     console.log(`success ${data}`)
// }
// function onError(data){
//     console.log(`Error ${data}`)
// }
async function wetherstate(on, error) {
    try{
        const result = await getWeather() 
        console.log(result +' '+ on)
    }
    catch{
        console.log(`no wether detacted ${error}`)
    }
    
}
wetherstate('one','two')
// .then(onSuccess)
// .catch(onError)
