const mongoose= require("mongoose");

const ProductSchema= new mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"UserModel"
},
product:{
    type:String,
},
category:{
    type:String,
},
prize:{
    type:String,
},
location:{
    type:String,
},
date:{
    type:Date,
    default:Date.now
},

})

const Productmodal= new mongoose.model("Productmodal",ProductSchema);

module.exports=Productmodal;