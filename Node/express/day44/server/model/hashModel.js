import mongoose from "mongoose";



const authSchema = new mongoose.Schema({

    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
},{timestamps:true})



const authModel = mongoose.model("authdata",authSchema)


export default authModel