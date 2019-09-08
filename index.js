const express=require("express");
const path=require("path");
const SocketIO=require("socket.io");

const app=express();



app.use(express.static(path.join(__dirname,"/frontend/public")));

const servidor=app.listen(process.env.PORT || 3000,()=>{console.log("Estamos conectados");});

const io=SocketIO(servidor);