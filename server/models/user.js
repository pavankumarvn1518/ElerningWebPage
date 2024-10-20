import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",

    },subscription:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",

    },
    ],
},{
   timestamp:true,
});
export const User = mongoose.model("User",schema);