const express=require("express")
const connect = require("./confing/user.db")
const { route } = require("./routes/user.routs")
const cookie=require("cookie-parser")
const app=express()
app.use(express.json())
app.use(cookie())
app.use(route)

app.listen(8090,()=>{
    console.log("server 8090");
    connect()
})