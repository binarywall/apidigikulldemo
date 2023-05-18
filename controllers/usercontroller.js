const { getAllUsers,getUserByID } = require("../db/db")


const getuserData=(req,res)=>{
    const users=getAllUsers();

    res.json({
        message:"Success",
        data:users
    })
}

const getUserById=(req,res)=>{
    const id=req.param.id
    const users=getUserByID(id);

    res.json({
        message:"User Found",
        data:users
    })
}

const editUserprofile=(req,res)=>{
    
    const id=req.param.id
    const users=getUserByID(req.id,req.body);
   

    res.json({
        message:"Update Successfully",
        data:users
    })
}


module.exports={
    getuserData,
    getUserById,
    editUserprofile
}