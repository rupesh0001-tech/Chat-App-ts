import type { Types } from "mongoose";


export interface messageI {
    sender: Types.ObjectId;
    reciver:  Types.ObjectId;
    message : string;
    createdAt: Date;
}