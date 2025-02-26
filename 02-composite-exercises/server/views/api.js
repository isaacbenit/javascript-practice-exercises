const client = require('./databasepg.js')
const express = require('express');
const app =express();

app.listen(3300,()=>{
    console.log('serve is no listening at port 3300')
})
client.connect();

app.get('/users',(req,res)=>{
    client.query(`select * from people`,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }
    });
    client.end;
});
app.get('/users/:id',(req,res)=>{
    client.query(`select * from people where id=${req.params.id}`,(err,result)=>{
        if(!err){
           res.send(result.rows)
        }
    });
    client.end;
})
