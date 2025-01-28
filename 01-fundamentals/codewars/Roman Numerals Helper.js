// class RomanNumerals {
//     static toRoman(num) {
//         const roman={
//             M:1000,
//             CM:900,
//             D:500,
//             CD:400,
//             C:100,
//             XC:90,
//             L:50,
//             XL:40,
//             X:10,
//             IX:9,
//             V:5,
//             IV:4,
//             I:1
//         }
//         // cdc
//         let romannum='';
//         let realnum=0;
//         let count=0;
//         for(let index in roman){
//             while(num>=roman[index]){
//                 romannum+=index;
//             num=num-roman[index]}
//             if(typeof(num)==='string'){
             
//             }}
        
//         return romannum
//     }
  
//     static fromRoman(str) {
//         const roman={
//             M:1000,
//             CM:900,
//             D:500,
//             CD:400,
//             C:100,
//             XC:90,
//             L:50,
//             XL:40,
//             X:10,
//             IX:9,
//             V:5,
//             IV:4,
//             I:1
//         }
//         let m=0
//         let k=Object.values(roman)
//         let p=Object.keys(roman)
//         let j=0
//         for(let i=0;i<str.length;i++){
//             if(p.includes(str[i]+str[i+1])){
//                 let z=str[i]+str[i+1]
//                 j+=k[p.indexOf(z)]
//                 str = str.replace(z,'')
//                 str= str.trim()
//             }
//             if(!p.includes(str[i]+str[i+1])){
//                 j+=k[p.indexOf(str[i])]
//                 str = str.replace(str[i],'')
//             }
//         }
//         return j
//     }
// }



function toRoman(num){
    const roman={
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    // cdc
    let romannum='';
    let realnum=0;
    let count=0;
    for(let index in roman){
        while(num>=roman[index]){
            romannum+=index;
        num=num-roman[index]}
        if(typeof(num)==='string'){
         
        }}
    
    return romannum
}
console.log(toRoman(21))


