function fname(fname,lname,callback){
    let text=  `${fname} ${lname}`
    console.log(fname + lname)
  callback();

}

function fullname(text){
    console.log(text);
}

fname('isaac','benit',()=>{
    fullname()
})