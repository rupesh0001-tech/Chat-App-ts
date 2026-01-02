export interface UserI {
    _id: string | null,
    name: string | null,
    email: string | null,
    isOnline: boolean | null,
    createdAt: Date | null,
    updatedAt: Date | null,
}

export interface RegisterUserI {
    name: string | null,
    email: string | null,
    password: string | null,
}

export interface LoginUserI {
    email: string | null,
    password: string | null,
}

export interface FriendI {
    _id: string | null,
    name: string | null,
    email: string | null,
    isOnline: boolean | null,
    createdAt: Date | null,
    updatedAt: Date | null,
}

export interface MessageI {
    _id: string,
    sender: string,
    receiver: string,
    message: string,
    createdAt: Date,
    updatedAt: Date,
} 

