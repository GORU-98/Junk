const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Successfully connected")
}).catch((e)=>{
    console.log("not connected" + e )
})