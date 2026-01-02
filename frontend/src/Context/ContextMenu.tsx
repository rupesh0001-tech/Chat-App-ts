import { createContext, useEffect } from "react";
import { useState } from "react";
import type { FriendI, UserI } from "../interfaces/interfaces";
import { api } from "../api/api";



interface MyContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  friends: FriendI[] 
  setFriends: React.Dispatch<React.SetStateAction<any>>;
}


export const MyContext = createContext<MyContextType>(
  {} as MyContextType
);
export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<UserI | null >(null);
  const [friends, setFriends] = useState<FriendI[]>([]);

const checkIfUserIsLoggedIn = async () => {
      try {
          const res = await api.get(
              "/api/users/profile",
              { withCredentials: true }
          );
          setUser(res.data.user);
          setIsLogin(true);
      } catch (error: any) {
          throw error.response?.data || error; 
      }
  }

  //check if the user is logged in
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <MyContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, friends, setFriends }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;



