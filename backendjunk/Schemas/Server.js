const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://gourav:gourav1234@cluster0.3om7qko.mongodb.net/food?retryWrites=true&w=majority").then(()=>{
    console.log("Successfully connected")
}).catch((e)=>{
    console.log("not connected" + e )
})