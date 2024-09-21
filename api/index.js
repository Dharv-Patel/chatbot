import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import { cpus } from 'os'
import cluster from 'cluster'
import chatRoute from './routes/chatBot.route.js'
import userDataRoute from './routes/chatData.route.js'
import cors from 'cors'

dotenv.config()  // It's use for env veriable usecase


mongoose
    .connect(process.env.DB_STRING)
    .then(()=>{
        console.log("MongoDB is connected!")
    })
    .catch((err)=>{
        console.log(err)
    })
    
if (cluster.isPrimary) { // In ES modules, 'isMaster' is replaced by 'isPrimary'
    const numCPUs = cpus().length;
    console.log(numCPUs)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died. Forking a new one.`);
        cluster.fork();
    });
} else {
    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use('/auth',authRoute)
    app.use('/chatbot',chatRoute)
    app.use('/userchats',userDataRoute)

    // middlewear for error heandaling
    app.use((err,req,res,next)=>{
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal server error!"
        return res.status(statusCode).json({
            sucess: false,
            message,
            statusCode
        })
    })

    app.listen(1000,()=>console.log("server started at port no : '1000'"))
}