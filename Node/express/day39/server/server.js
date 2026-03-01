 
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import route from './routes/dataRoute.js';
import connectDb from './config/db.js';


dotenv.config()
connectDb()

const deptapp = express()

deptapp.use(cors())

deptapp.use(express.json())

deptapp.use("/api/dept",route)

const PORT =process.env.PORT || 3000

deptapp.listen(PORT,()=>{

console.log(`server connected successfully ${PORT}`);



})
// http://localhost:5000/api/dept