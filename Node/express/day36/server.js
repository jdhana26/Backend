import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/auth.js'
import connectDB from './config/db.js'
import route from './routes/auth.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/studentdata",route)

app.use("/api/users",routes)

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
   
    console.log(`server Connected http://localhost:${PORT}`);
    
 

})

// http://localhost:5000/api/studentdata/