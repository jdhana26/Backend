import mongoose from "mongoose";


const newSchema = new mongoose.Schema({
 data:{
     name:String}},
     
     {timestamps:true});



 const datamodel =mongoose.model("apidatas",newSchema)

 export default datamodel;
 