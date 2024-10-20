import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';  // Note the './'
dotenv.config();
const app = express();
const port= process.env.PORT;


app.get('/',(req,res)=>{
    res.send("Server is working ");
});

//imporing route
import userRoutes from './routes/user.js';
//using route
app.use('/api',userRoutes)
app.listen(5000,()=>{
    console.log(`server is running on http://localhost:${port}`);
 connectDb();
});
