
import datamodel from "../models/model.js"

export const api_data = async(res,req)=>{

  console.log(req.body)
//  const {name,age} =req.body  
   
console.log(res)

   try {
    
     const newdata = await datamodel.create({name,age}) 
     
    //  res.status(201).json({msg:"successfully done",newdata})
   

   } catch (error) {
     console.log("something error",error)

    
   }




}