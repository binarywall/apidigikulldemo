const express=require("express")
const router = express.Router();
const {getuserData,getUserById,editUserprofile}=require("../controllers/usercontroller")
const {checkAuthorization,encryptPassword}=require("../middlerwares/middlerware")

router.use(checkAuthorization)
router.get("/",getuserData)
router.get("/:id",getUserById)
router.put("/:id",encryptPassword,editUserprofile)


module.exports=router