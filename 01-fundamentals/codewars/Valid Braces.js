function checkbraces(a){
    if(a.includes("()")) return checkbraces(a.replace('()',''));
    if(a.includes('[]')) return checkbraces(a.replace('[]',''));
    if(a.includes('{}')) return checkbraces(a.replace('{}',''));
    return a.length === 0;
}
console.log(checkbraces('([{}])'))