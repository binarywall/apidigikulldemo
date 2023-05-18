const express=require("express")
const router = express.Router();
const {signup,login}=require("../controllers/authconstroller")
const {encryptPassword,checkPassword}=require("../middlerwares/middlerware")

router.post("/signup",encryptPassword,signup)
router.post("/signin",checkPassword,login)

module.exports=router