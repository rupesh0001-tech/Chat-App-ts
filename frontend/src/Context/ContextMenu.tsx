import { createContext, useEffect } from "react";
import { useState } from "react";
import type { FriendI, UserI } from "../interfaces/interfaces";
import { api } from "../api/api";

interface MyContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  friends: FriendI[];
  setFriends: React.Dispatch<React.SetStateAction<any>>;
  currentUser: UserI | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
  currentUserMessages: any;
  setCurrentUserMessages: React.Dispatch<React.SetStateAction<any>>;
}

import { socket } from "../socket/socket";

export const MyContext = createContext<MyContextType>({} as MyContextType);
export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<UserI | null>(null);
  const [friends, setFriends] = useState<FriendI[]>([]);
  const [currentUser, setCurrentUser] = useState<UserI | null>(null);
  const [currentUserMessages, setCurrentUserMessages] = useState<any[]>([]);

  const checkIfUserIsLoggedIn = async () => {
    try {
      const res = await api.get("/api/users/profile", {
        withCredentials: true,
      });
      setUser(res.data.user);
      setIsLogin(true);
    } catch (error: any) {
      throw error.response?.data || error;
    }
  };

  //check if the user is logged in
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  useEffect(() => {
    if (user?._id) {
      socket.emit("join", user._id);
      console.log("joined socket with userId:", user._id);
    }
  }, [user]);

  return (
    <MyContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        friends,
        setFriends,
        currentUser,
        setCurrentUser,
        currentUserMessages,
        setCurrentUserMessages,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
