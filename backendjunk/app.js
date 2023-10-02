const express= require("express");
const mongoose= require("mongoose");
require("./Schemas/Server");
const Productmodal = require("./Schemas/ProductSchema");
const app=express();
app.use(express.json());
const port=5000;
const cors=require("cors");
app.use(cors());
app.post("/item",async(req,res)=>{
    const card= await new Productmodal(req.body);
    const result= await card.save();
    res.send("card saved successfully" + result);
})

app.get("/get",async(req,res)=>{
    const allcards=await Productmodal.find();
    res.send({allcards});
})

app.listen(port,()=>{
    console.log(`Backend is running on port:${port}`)
})