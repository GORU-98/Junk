const express= require("express");
const mongoose= require("mongoose");
require("./Schemas/Server");
const Productmodal = require("./Schemas/ProductSchema");
const UserModel = require("./Schemas/UserSchema");
const jwt=require("jsonwebtoken");
const fetchuser=require("./middleware/fetchuser")
const app=express();
app.use(express.json());
const port=5000;
const cors=require("cors");
// const { useAsyncError } = require("react-router-dom");
app.use(cors());

const JWT_SEC="whenevericallyoudonotcomehere"

// To add a single card
app.post("/item",fetchuser,async(req,res)=>{
    try {
        const userId=req.client.id;
        const {product,category,prize,location}=req.body;
        const card= await new Productmodal({product,category,prize,location,user:req.client.id}
            );
        const result= await card.save();
        if(result){
            const allcards=await Productmodal.find({user:userId});
            res.send({allcards,message:"Card Added Successfully"});
        }
    } catch (error) {
        res.send(error);
    }
})

// To fetch all cards

app.get("/get",fetchuser,async(req,res)=>{
    const userId=req.client.id;
    const allcards=await Productmodal.find({user:userId});
    res.send({allcards});
    // console.log(userId)
})

// To delete cards

app.delete("/delete/:id",fetchuser,async(req,res)=>{
    try {
        const getcard=await Productmodal.findById(req.params.id);
        // console.log(getcard.user.toString());
        if(!getcard){
            res.json("Not allowed");
        }
        const userId=req.client.id;
        if(!getcard.user.toString()==userId){
            throw new Error
        }
        const allcard=await Productmodal.findByIdAndDelete(req.params.id);
        const allcards=await Productmodal.find({user:userId});
        res.status(201).send({allcards,message:"Card Deleted Successfully"});
        
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

            const data={
                client:{
                    id:isUser.id
                }
            }
            // console.log(data);
            const authtoken= jwt.sign(data,JWT_SEC);
    
            const okUser= await isUser.save();
            res.status(200).send({msg:"Signed in Successfully",status:200,authtoken});
        } catch (error) {
            res.status(404).send(error);

        }
       

    })

// To fetch the user

app.get("/getuser",fetchuser,async(req,res)=>{
    const userId=req.client.id;
    const isUser=await UserModel.findById(userId).select(["-password","-cpassword"]);
    if(!isUser){
        throw new Error
    }
    res.send(isUser);
})

app.listen(port,()=>{
    console.log(`Backend is running on port:${port}`);
})