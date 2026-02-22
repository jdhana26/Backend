import studentModel from "../models/models.js"

export const users = async(req,res)=>{
  const {name}=req.body

  // 
  //console.log(req);

  try {

    const add =await studentModel.create(req.body)

    if (add){

      res.status(201).json({msg:"successfully added"})
    }else{
      res.status(404).json({msg:"error occur"})
    }
    
  } catch (error) {
    
    console.log("error",error);

    res.status(404).json({msg:"error occur",error})
    }
    

  }
  


    
