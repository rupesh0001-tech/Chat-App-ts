import { useContext } from "react";
import { MyContext } from "../../../Context/ContextMenu";

const ChatNavbar = () => {
  const { currentUser } = useContext(MyContext);
  return (
    
      <div className="h-14 flex items-center px-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
          {currentUser?.name?.charAt(0).toUpperCase()}
        </div>
        <span className="font-medium">{ currentUser?.name}</span>
      </div>
    </div>
    
  );
};

export default ChatNavbar;
