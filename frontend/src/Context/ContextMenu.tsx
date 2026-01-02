import { createContext } from "react";
import { useState } from "react";
import type { FriendI, UserI } from "../interfaces/interfaces";


interface MyContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  friends: FriendI | null;
  setFriends: React.Dispatch<React.SetStateAction<any>>;
}


export const MyContext = createContext<MyContextType>(
  {} as MyContextType
);
export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<UserI | null >(null);
  const [friends, setFriends] = useState<FriendI | null >(null);

  return (
    <MyContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, friends, setFriends }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;



