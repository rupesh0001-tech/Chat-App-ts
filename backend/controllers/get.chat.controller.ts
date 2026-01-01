import type { Request, Response } from "express";
import type { userI } from "../interfaces/user.interface";
import User from "../models/user.model.ts";
import Message from "../models/message.model.ts";


export const getChat = async (req: Request, res: Response) => {

    try { 
        const currentUser = await User.findById(req.userId);
    // handle if current user does not exist
    if (!currentUser) {
        return res.status(404).json({ message: "User not found" });
    }

    // get the other user
    const otherUser = await User.findById(req.params.id);

    // handle if other user does not exist
    if (!otherUser) {
        return res.status(404).json({ message: "User not found" });
    }

    // get the chat between the two users
    const chat = await Message.find({
        $or: [
            { sender: currentUser._id, reciver: otherUser._id },
            { sender: otherUser._id, reciver: currentUser._id },
        ],
    })

    // handle if chat does not exist
    if (!chat) {
        return res.status(404).json({ message: "Chat not found" });
    }

    res.status(200).json({ chat });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }

    
}