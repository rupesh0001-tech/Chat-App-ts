import { createContext } from "react";
import { useState } from "react";


interface MyContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  friends: any;
  setFriends: React.Dispatch<React.SetStateAction<any>>;
}


export const MyContext = createContext<MyContextType | null>(null);

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [friends, setFriends] = useState<any>(null);

  return (
    <MyContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, friends, setFriends }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;



