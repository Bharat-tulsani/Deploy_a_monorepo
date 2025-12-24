import { WebSocketServer } from "ws";
import client from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", (socket) => {
    client.user.create({
        data: {
            username: Math.random().toString(36).substring(2, 15),
            password: Math.random().toString(36).substring(2, 15)
        }
    });
    socket.send("Hello  you are connected to the server!");
    });