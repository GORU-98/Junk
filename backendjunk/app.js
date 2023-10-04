const express= require("express");
const mongoose= require("mongoose");
require("./Schemas/Server");
const Productmodal = require("./Schemas/ProductSchema");
const UserModel = require("./Schemas/UserSchema");
const app=express();
app.use(express.json());
const port=5000;
const cors=require("cors");
app.use(cors());
app.post("/item",async(req,res)=>{
    try {
        
        const card= await new Productmodal(req.body);
        const result= await card.save();
        if(result){
            const allcards=await Productmodal.find();
            res.send({allcards,message:"Card Added Successfully"});
        }
    } catch (error) {
        res.send(error);
    }
})

app.get("/get",async(req,res)=>{
    const allcards=await Productmodal.find();
    res.send({allcards});
})
app.delete("/delete/:id",async(req,res)=>{
    try {
        const getcard=await Productmodal.findById(req.params.id);
        if(!getcard){
           throw new Error
        }
        const allcard=await Productmodal.findByIdAndDelete(req.params.id);
        const allcards=await Productmodal.find();
        res.send({allcards,message:"Card Deleted Successfully"});
        
    } catch (error) {
        res.send(error)
    }
})


// Sign In

    app.post("/signin",async(req,res)=>{
        try {
            
            let isUser= await UserModel.findOne({email:req.body.email});
            if(isUser){
                // res.status(404).send("SignIn with valid credentials");
                throw new Error;
            }
            
            const password=req.body.password;
            const cPassword=req.body.cpassword;
            if(password!==cPassword){
                // res.status(404).send("Password field does not match");
                throw new Error;
            }
    
             isUser =await new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:password,
                cpassword:cPassword,
    
            })
    
            const yupUser= await isUser.save();
            res.status(200).send({msg:"Signed in Successfully",status:200});
        } catch (error) {
            res.status(404).send(error);

        }
       

    })

app.listen(port,()=>{
    console.log(`Backend is running on port:${port}`);
})