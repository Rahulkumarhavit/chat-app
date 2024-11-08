import { Server } from "socket.io";

export function setupSocket(io:Server){
    io.on("connection",(socket)=>{
        console.log("the socket connected...",socket.id)

        socket.on("message",(data)=>{
            console.log("Server side message",data)
            socket.emit("message",data);
        })

        socket.on("disconnect",()=>{
            console.log("a user is disconnected",socket.id)
        })
    })
}