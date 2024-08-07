import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from "cors";
import path from 'path'
import { fileURLToPath } from 'url';

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()

connectDB()
const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to ecommerce app'
    })

})
const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white)
})