const express = require("express")
const connect = require("./config/db")
const doctorRouter = require("./controllers/doctor.controller")
const userRouter = require("./controllers/user.controller")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.send("App is created.")
})
app.use("/doctor",doctorRouter)
app.use("/user",userRouter)

app.listen(3001,(req,res)=>{
    connect()
    console.log("Server started on port 3001")
    return
})