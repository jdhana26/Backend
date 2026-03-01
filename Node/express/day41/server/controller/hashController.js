import bcrypt from "bcrypt"
import hashModel from "../model/hashModel.js"


export const add = async (req, res) => {


    try {

        const { name, email, password } = req.body


        console.log(req.body)
        
        const checkEmail = await hashModel.findOne({ email })

        if (checkEmail) {

            return res.status(400).json({ msg: "Already in data" })
        }

        const saltRound = 10

        const hashPassword = await bcrypt.hash(password, saltRound)

        const addData = await hashModel.create({ name, email, password: hashPassword })

        res.status(200).json({ msg: "Data added successfully", addData})

    } catch (error) {


        console.log('error occurs..',error)
        

        res.status(500).json({ msg: "error occurs" })


    }

    
}

// 
// const addData = await hashModel.create({ name, email, password: hashPassword })
