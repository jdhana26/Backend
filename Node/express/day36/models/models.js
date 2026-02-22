import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
studentname:{type:String},
studentclass:{type:Number},
studentsection:{type:String},
studentper:{type:String},
status:{type:String,default:"Active"},
createby:{type:String,default:"Admin"},
updatedby:{type:String},




},{timestamps:true})

const studentModel =mongoose.model("studentdata",studentSchema)

export default studentModel;