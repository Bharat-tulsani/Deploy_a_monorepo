import { WebSocketServer, WebSocket } from "ws";
// import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", (socket: WebSocket) => {
    // TODO: Re-enable after Prisma setup is fixed
    // client.user.create({
    //     data: {
    //         username: Math.random().toString(36).substring(2, 15),
    //         password: Math.random().toString(36).substring(2, 15)
    //     }
    // });
    console.log("New WebSocket connection established");
    socket.send("Hello  you are connected to the server!");
    });