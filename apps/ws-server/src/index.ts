import { WebSocketServer, WebSocket } from "ws";
const { client } = require("@repo/db/client");

const server = new WebSocketServer({ port: 3001 });

console.log("🚀 WebSocket server starting on port 3001...");

server.on("connection", (socket: WebSocket) => {
    // Create a new user when someone connects
    client.user.create({
        data: {
            username: Math.random().toString(36).substring(2, 15),
            password: Math.random().toString(36).substring(2, 15)
        }
    }).then((user: any) => {
        console.log("New user created:", user.username);
    }).catch((error: any) => {
        console.error("Error creating user:", error);
    });
    
    console.log("New WebSocket connection established");
    socket.send("Hello! You are connected to the server!");
});

console.log("✅ WebSocket server is ready and listening on port 3001");