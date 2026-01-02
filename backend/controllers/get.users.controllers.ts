import User from "../models/user.model.ts";
import type { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try {     
        console.log(req.userId)   
        const users = await User.find( {  _id : {  $ne : req.userId } });
        res.status(200).json({ users });
    } catch (error : any) {
        
        res.status(500).json({ message: "Something went wrong", error : error.message });
    }
};