function fetching(){
    return new Promise((resolve, reject)=>{
        
        try{
            let fetchhh = fetch(["https://www.javascripttutorial.net/es6/" , "https://discord.com/channels/@me/1319180871865073664"])
            let p=[]
            p.push([...fetchhh])
            resolve(fetchhh)
        }
        catch(end){reject('no data')}
        
    })
}
async function get () {
    const a = await Promise.all([fetching])
    // console.log(a)
    Promise.all([fetching])
        .then((value) => console.log(value))
        .catch((value) => console.log(value))
}
get()