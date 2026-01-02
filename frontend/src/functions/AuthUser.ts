import { api } from "../api/api";
import type { LoginUserI, RegisterUserI } from "../interfaces/interfaces";

export const registerUser = async ({ user }: { user: RegisterUserI }) => {
  try {
    const res = await api.post(
      "/api/users/register",
      user,
      { withCredentials: true }
    );
    return res.data; 
  } catch (error: any) {
    throw error.response?.data || error; // ✅ let caller handle error
  }
};

export const loginUser = async ({ user }: { user: LoginUserI }) => {
  try {
    const res = await api.post(
      "/api/users/login",
      user,
      { withCredentials: true }
    );
    return res.data; 
  } catch (error: any) {
    throw error.response?.data || error; // ✅ let caller handle error
  }
};

export const logoutUser = async () => {
  try {
    const res = await api.get(
      "/api/users/logout",
      { withCredentials: true }
    );
    return res.data; 
  } catch (error: any) {
    throw error.response?.data || error; 
  }
};


