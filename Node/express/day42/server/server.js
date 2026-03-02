import express from "express"

import dotenv from "dotenv"

import cors from "cors"

import route from "./routes/hashRoute.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()
const app = express()


app.use(express.json())

app.use(cors())


app.use('/api/hash', route)



const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

console.log(`Server running...http://localhost:${PORT}`);
route
})

console.log(express);

