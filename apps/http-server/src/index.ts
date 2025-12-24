// ...existing code...
import express, { type Request, type Response } from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from HTTP Server!");
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  const user= await client.user.create({
        data: {
            username,
            password
        }
    }) 
    res.json({ message: "Signup successfully",
        id:user.id
     });
});
app.listen(PORT, () => {
  console.log(`HTTP Server is running on http://localhost:${PORT}`);
});
 