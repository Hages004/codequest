import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import usersroutes from './Routes/user.js'
import questionroutes from './Routes/question.js'
import answerroutes from './Routes/answer.js'
const app=express();
dotenv.config();
app.use(express.json({limit :"30mb", extended:true}))
app.use(express.urlencoded({limit :"30mb", extended:true}))
app.use(cors());

app.use("/user",usersroutes);
app.use("/questions",questionroutes)
app.use("/answer",answerroutes)
app.get('/',(req,res)=>{
    res.send("codequest is running properly")
})
const PORT =process.env.PORT || 5000
const database_url=process.env.MONGODB_URL

mongoose.connect(database_url)
.then(()=> app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))