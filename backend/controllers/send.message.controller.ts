import type { Request, Response } from "express";
import Message from "../models/message.model.ts";
import User from "../models/user.model.ts";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const senderUser = await User.findById(req.userId);
    const reciverUser = await User.findById(req.params.id);

    if (!senderUser || !reciverUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { message } = req.body as { message?: string };

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const newMessage = await Message.create({
      message,
      sender: senderUser._id,
      reciver: reciverUser._id,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
