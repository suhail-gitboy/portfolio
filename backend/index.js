import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"


const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://portfolio-jf7f.vercel.app"],
    methods: ["GET", "POST"],

    allowedHeaders: ["Content-Type", "Authorization"],

}))

import "./config/Database.js"
import { Mainrouter } from "./routes.js"

app.use("/", Mainrouter)

app.listen(8700, () => {
    console.log("running 0n 8700");

})