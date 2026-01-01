import mongoose from 'mongoose';

interface IMessage extends mongoose.Document {
    sender: string;
    reciver: string;
    message : string;
    createdAt: Date;
}

const messageSchema = new mongoose.Schema<IMessage>({
    sender: {
        type: String,
        required: true
    },
    reciver: {
        type: String,
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

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;