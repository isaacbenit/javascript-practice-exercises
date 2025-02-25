const fs= require('fs');
// fs.readFile('./docs/blog12.txt',(err, data)=>{
// if(err){
//     console.log(err)
// }
// console.log(data.toString());
// })
// console.log('last line')
fs.writeFile('./docs/blog2.txt','hello world',()=>{
    console.log('file was written')
})