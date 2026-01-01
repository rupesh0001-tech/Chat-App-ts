import mongoose from 'mongoose';
import type { messageI } from '../interfaces/message.interface.ts';



const messageSchema = new mongoose.Schema<messageI>({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    reciver: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
        
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model<messageI>("Message", messageSchema);
export default Message;