const mongoose= require("mongoose");

const ProductSchema= new mongoose.Schema({
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
})

const Productmodal= new mongoose.model("Productmodal",ProductSchema);

module.exports=Productmodal;