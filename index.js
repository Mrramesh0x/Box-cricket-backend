import express from "express"
import { router } from "../server/Routes/Router.js";
import path from "path";
import cors from "cors"
const app = express();
const PORT = 4000;
app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("server is running on 4000 port")
})

app.use("/api",router)
