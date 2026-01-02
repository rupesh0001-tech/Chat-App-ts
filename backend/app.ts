
// import packages
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { createServer } from 'http';
import  cookieParser  from 'cookie-parser';




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
export const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',  
    }
});

// init socket io
const onlineUsers = new Map<any, any>();



 io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    
    socket.on('join', (userId) => {
        onlineUsers.set(userId, socket.id);
        console.log('user connected', onlineUsers);

    })
    socket.on('disconnect', () => {
        onlineUsers.delete(socket.id);
        console.log('user disconnected');
    });

    
    socket.on('send-message', ( { userId, message } ) => {
        console.log('message received', message);
        socket.to(onlineUsers.get(userId)).emit('receive-message', message);
    });

});

// middlewares 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// routes 
app.use('/api/users', userRoutes);
app.use('/api/users', getUserRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chats', getChatRoutes);


// app is listening
httpServer.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});

