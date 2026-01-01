export interface userI {
    _id: string,
    name: string,
    email: string,
    password: string,
    isOnline: boolean
}

export interface registerUserI {
    name: string | null,
    email: string | null,
    password: string | null,
}