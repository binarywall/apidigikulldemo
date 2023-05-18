const express=require("express")
const app=express()

const authRouter=require("./routes/auth")
const userRouter=require("./routes/user")

const {errorMiddlerware}=require("./middlerwares/middlerware")

app.use(express.json())

app.use("/auth",authRouter)
app.use("/user",userRouter)

//register error middlerware at the end
app.use(errorMiddlerware);
module.exports=app;