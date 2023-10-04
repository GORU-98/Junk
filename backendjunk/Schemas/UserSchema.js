const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    cpassword:{
        type:String,
    },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})

const UserModel=new mongoose.model("UserModel",UserSchema);

module.exports=UserModel;