import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config()



mongoose.connect(process.env.MongoDB).then(()=>{
   console.log('Connected to MongoDB')
}).catch((err)=>{
   console.log(err)
})

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
   res.json({"msg":"This is Home page"})
})



app.listen(3000,()=>{
console.log("Server is running on port 3000")
}
)
