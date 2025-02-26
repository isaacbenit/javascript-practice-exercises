const {Client}= require('pg')
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"isaac",
    database:"mydb"
})
module.exports= client
// client.connect();
// client.query(`select * from people`,(err,res)=>{
//     if(!err){
//         console.log(res.rows)
//     }
//     else{
//         console.log(err.message);
//     }
//     client.end;
// })