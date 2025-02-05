function countWords(str) {
  let p=''
    for(let i=0;i<str.length;i++){
        if(str[i]*1 === 0 && str[i]!==' '){
            p+=' '
        }
        else(p+=str[i])
    }
    return p.split(' ').filter(n=>n).length
  }

  console.log(countWords("Dear   Victoria, I love  to press    space button."))
  