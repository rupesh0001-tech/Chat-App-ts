import { api } from "../api/api";

export const getFriends = async () => {
    try {
        const res = await api.get(
            "/api/users/",
            { withCredentials: true }
        );
        return res.data; 
    } catch (error: any) {
        throw error.response?.data || error; 
    }
}
;