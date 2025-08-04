import express from "express"
// import { router } from "../server/Routes/Router.js";
import { router } from "./Routes/Router.js";
import dotenv from "dotenv"
import cors from "cors"
const app = express();
dotenv.config()
const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("server is running on 4000 port")
})

app.use("/api",router)
