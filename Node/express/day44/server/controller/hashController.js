import authModel from "../model/hashModel.js"
import bcrypt from 'bcrypt'

export const addregister = async(req,res)=>{

try {
    
const {name,email,password} =req.body
 
const CheckEmail = await authModel.findOne({email})

if(CheckEmail){

    return res.status(400).json({msg:"email already exists"})
}
 const saltkey = 10

const hashpassword = await bcrypt.hash(password,saltkey,)


const addData = await authModel.create({name,email,password:hashpassword})

res.status(201).json({msg:"successfully added"})

} catch (error) {
    

    console.log(error);
    
}


}