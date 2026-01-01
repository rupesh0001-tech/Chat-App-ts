import User from "../models/user.model.ts";
import type { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
    try {        
        const users = await User.find( { $ne : {  _id : req.userId } });
        res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};