import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {connectDB} from './lib/db.js';
import messageRoutes from './routes/messageRoutes.js';
import authRoutes from './routes/authRoutes.js'
import { ENV } from './lib/env.js';
import {app,server} from './lib/socket.js'



const PORT= ENV.PORT || 8008;

app.use(express.json());
app.use(cors({
    origin:ENV.CLIENT_URL,
    credentials:true}));
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

app.get("/", (req, res) => {
  res.send("<h2>Chat App Backend Running Successfully 🚀</h2>");
});

server.listen(PORT,()=>{
    console.log("server is running port ", PORT);
    connectDB();
}
);
