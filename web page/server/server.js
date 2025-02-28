const express =require("express")
const cors= require('cors')
const pool= require("./database")
const app= express()

app.use(express.json())
app.use(cors())



app.post("/adduser",(req,res)=>{
    // const pg = "SELECT * FROM adduser WHERE username=? AND password =?;"

    // db.querfy(pg,[req.body.email,req.body.password],(err,data)=>{
    //     if(err) return res.json("error");
    //     if(data.length >0){
    //         return res.json("login succesffull")
    //     }
    //     else{
    //         return res.json("No record")
    //     }
    // })
    const username= req.body["username"];
    const password= req.body["password"];

    console.log("username:"+ username);
    console.log("passwork:"+ password);
    
    const insertSTMT = `INSERT INTO accounts (username,password) VALUES ('${username}','${password}')`
    pool.query(insertSTMT).then((response)=>{
        console.log("Data saved")
        console.log(response);  
    })
    .catch((err)=>{
        console.log(err);
    });

    console.log(req.body)
    res.send("response Received: "+ req.body)
})

app.listen(4000, ()=> console.log("server on localhost:4000"))