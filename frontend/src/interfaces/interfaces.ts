export interface UserI {
    _id: string;
    name: string;
    email: string;
    isOnline: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface RegisterUserI {
    name: string | null;
    email: string | null;
    password: string | null;
}

export interface LoginUserI {
    email: string | null;
    password: string | null;
}

export interface FriendI {
    _id: string;
    name: string;
    email: string;
    isOnline: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface MessageI {
    _id: string;
    sender: string;
    receiver: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

