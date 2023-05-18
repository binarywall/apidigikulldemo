const {createUser}=require("../db/db")
const jwt=require("jsonwebtoken")

const signup=(req,res,next)=>{
    const user=req.body;

    let result=createUser(user)
    if(result){
        res.json({
            status:"Success",
            messag:"User Created"
        })
    }else{
        next(new Error("User Already exixt"))
    }
    
}
const login=(req,res)=>{
    //issuing the jwt (json web token)
    const token =jwt.sign({username:req.body.username},process.env.JWTKEY)
   
    res.json({
        status:"Success",
        token:token,
        messag:"User Loggdin"
    })
}


module.exports={
    signup,
    login
}