const jwt=require("jsonwebtoken");
const JWT_SEC="whenevericallyoudonotcomehere"

const fetchuser=async(req,res,next)=>{
    const token= await req.header("authtoken");
    if(!token){
        throw new Error
    }
    const authtoken=jwt.verify(token,JWT_SEC);
    req.client=authtoken.client;
    next();
    
}

module.exports=fetchuser