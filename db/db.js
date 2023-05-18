//store all the user in it
//DAO (Data access object layer ---> which intracts with databses)
const { v4: uuidv4 } = require('uuid');
let USERS=[

]

const createUser=(userData)=>{
    let existing= USERS.find(ele=>ele.username==userData.username);
    if(existing){
        return false;
    }
    // Generate a Id for the user 
    userData.id=uuidv4();
    USERS.push(userData)
    return true;
}

const getAllUsers=()=>{
    return USERS;
}

const getUserByUsername=(userData)=>{
    console.log(userData);
    return USERS.find(ele=>ele.username==userData)
}
const getUserByID=(userid)=>{
    console.log(userid);
    return USERS.find(ele=>ele.userid==userid)
}

const updateByid=(userid,data)=>{
    let filterdata= USERS.filter(ele.userid!=userid)
    data.id=id
    filterdata.push(data)
    USER=[...filterdata]
}

module.exports={
    getUserByUsername,
    createUser,
    getAllUsers,
    getUserByID,
    updateByid
}