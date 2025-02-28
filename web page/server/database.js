// const { response } = require("express")
const {Pool}= require("pg")

const pool= new Pool({
    user:"postgres",
    password:"isaac",
    host:"localhost",
    port:5432,
    database:'yt_login_systems'
})

module.exports= pool;
// const createTblQry=`CREATE TABLE accounts(
//         user_id serial Primary key,
//         username varchar(50) Unique not null,
//         password varchar(50) Unique not null);`

// pool
//     .query(createTblQry)
//     .then((response)=>{
//     console.log("Table Created")
//     console.log(response)
// })
// .catch((err)=>{
//     console.log(err)
// });
