function checkbraces(a){
    for(let i=0;i<a.lenght;i++){
        for(let x=0;x<a.lenght;x++){
            if(a[i]==='(' && (a.length-i===')')){
                return true
            }
            if(a[i]==='(' && a[i+1]===')'){
                return true
            }  // ([])
            else{
                return false
            }
        }
    }
    ( ( { ) } ) - [ ( { } ) ]
}
console.log(checkbraces('([{])'))