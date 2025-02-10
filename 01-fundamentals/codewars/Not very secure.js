function alphanumeric(string){
    if(string.includes(" "&&"_"&&")"&&"$"&&"!") || string*1=== 0 || string === ""){
        return false
    }
    else{
        return true
    }
  }
  
console.log(alphanumeric("ecoMnGObUy!VoM_V"))

