import express from 'express';
import { addregister } from '../controller/hashController.js';

const route = express.Router()


route.post("/register",addregister)

export default route

// http://localhost:5000/api/auth/register