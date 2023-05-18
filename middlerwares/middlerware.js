const bcrypt=require("bcrypt");
const { getUserByUsername } = require("../db/db");
const  jwt = require('jsonwebtoken');
const errorMiddlerware=(err,req,res,next)=>{
    res.json({
        message:"Failed",
        error:err.toString()
    })
}

const encryptPassword=(req,res,next)=>{
    const saltRounds=10;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        console.log(hash)
        req.body.password=hash;
        next()
        // Store hash in your password DB.
    });
}
const checkPassword=(req,res,next)=>{
    const user=getUserByUsername(req.body.username)
    if(user){
        bcrypt.compare(req.body.password,user.password,function(err,result){
            if(!result){
                next(new Error("Enter Correct Password"))
            }else{
                next()
            }
            console.log(result)
        });
    }else{
        next(new Error("User Not Found"))
    }
    
}

const checkAuthorization=(req,res,next)=>{
    //we will be checking for the jwt header
    const authorizationToken=req.headers.authorization;
    // console.log(authorizationToken)
    if(authorizationToken){
        // We will check the token here ,that if it is the valid token ornot
          try {
            jwt.verify(authorizationToken, process.env.JWTKEY);

            next();
          } catch(err) {
          
            res.status(401).json({
                status:"Failed",
                message:"Token Malformed..."
            })
            
          }
        next()
    }else{
        res.status(401).json({
            status:"Failed",
            message:"Authorization Required"
        })
    }

    next();
}

module.exports={
    errorMiddlerware,
    encryptPassword,
    checkPassword,
    checkAuthorization
}