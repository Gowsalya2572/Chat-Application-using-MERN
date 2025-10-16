import express from 'express';
const app= express();
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const PORT= process.env.PORT || 8000;

app.use(express.json());

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log("server is running port ", PORT);
    connectDB();
}
);