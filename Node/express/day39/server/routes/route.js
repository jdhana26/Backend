import express from 'express'
import { api_data } from '../contoller/controller.js';


const route =express.Router()


route.post("/data",api_data)

export default route;


// http://localhost:5000/api/dept/data