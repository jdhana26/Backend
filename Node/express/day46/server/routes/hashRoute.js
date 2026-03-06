import express from "express"
import { add } from "../controller/hashController.js"



const route = express.Router()


route.post("/pwHash",add)


export default route


// http://localhost:5000/api/hash/pwHash