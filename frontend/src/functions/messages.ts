import { api } from "../api/api";
import { socket } from "../socket/socket";

export const getMessages = async (id : any) => {
    try {
        const res = await api.get(`/api/chats/${id}`, { withCredentials: true });
        return res.data; 
    } catch (error: any) {
        throw error.response?.data || error; 
    }
}

export const sendMessage = async (id : any, message : any) => {
    try {
        const res = await api.post(`/api/messages/${id}`, { message }, { withCredentials: true });
        console.log( res.data.message )
        socket.emit('send-message', {message : res.data.message, userId : id});
        return res.data; 
    } catch (error: any) {
        throw error.response?.data || error; 
    }
}