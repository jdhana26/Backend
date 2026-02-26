import express from 'express'
import { added, updatedata, getdata } from '../controllers/controller.js';

const route = express.Router()


route.post("/add",added)
route.get("/getdata/:id",getdata)
route.put("/updatedata/:_id",updatedata)







export default route;

// http://localhost:5000/api/dept/add

// http://localhost:5000/api/dept/getdata

// http://localhost:5000/api/dept/updatedata