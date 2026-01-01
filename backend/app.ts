// import packages
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { createServer } from 'http';
import path from 'path';



//import files 
import connectDB from './db/db.ts';

import userRoutes from './routes/user.routes.ts';
import getUserRoutes from './routes/get.users.routers.ts';
import messageRoutes from './routes/message.routers.ts';
import getChatRoutes from './routes/get.chat.routes.ts';




// init vars 
const app = express();
const port = process.env.PORT || 5000;
connectDB()


// init socket io 
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'  
    }
});

// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes 
app.use('/api/users', userRoutes);
app.use('/api/users', getUserRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chats', getChatRoutes);


// app is listening
httpServer.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});

