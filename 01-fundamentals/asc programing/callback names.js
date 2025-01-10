function fname(fname,lname,callback){
    let text=  `${fname} ${lname}`
    let text2= `${lname} ${fname}`
    let text3= `${ fname[0].toLowerCase()}. ${lname} `
      callback(text);
      callback(text2);
      callback(text3);

}

function fullname(result){
    console.log(result);
}

fname('John','Doe',fullname)