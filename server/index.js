const express= require("express");
const mongoose= require("mongoose");
const dbconnect= require("./config/database");
const router= require("./routes/route");
const cookieparser= require("cookie-parser");
const app= express();
require("dotenv").config();
const cors= require("cors");
const http= require("http");
const {Server}= require("socket.io");
const File = require("./models/file");

console.log(process.env.DATABASE_URL);

const server= require('http').createServer(app);


const io= new Server(server,{
    cors:{
        origin:'*',
    }
});
server.listen(5000,()=>{
    console.log("Successfully listen");
})

try{
    io.on("connection", (socket)=>{
    })
}
catch(err){
    console.log(err);
}

async function watchforexpires(){
    const changeStream= File.watch();
    changeStream.on('change', async(change)=>{
        if(change.operationType==='delete'){
            io.emit('message',"Hello world");
        }
    })
}

watchforexpires();

app.use(express.json());
app.use(cors(
    {
        origin:["https://task-todo-abcd.vercel.app/"],
        methods:["POST", "GET", "DELETE"],
        credentials:true,
    }
));
app.use(cookieparser());
app.use('/api/v1', router);
app.get('/',(req,res)=>{
    res.json("Hello world");
})
app.listen(3001,()=>{
    console.log(`Server has started successfully at PORT 3001`);
})
dbconnect();


