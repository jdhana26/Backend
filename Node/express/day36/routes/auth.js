import express from 'express'
import {users} from '../controllers/controller.js'

const route =express.Router()

route.post("/create",users)

export default route

// http://localhost:5000/api/users/create

//insert  http://localhost:5000/api/studentdata/create