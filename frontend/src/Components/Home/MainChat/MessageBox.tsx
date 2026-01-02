import { useContext, useState } from "react";
import MessageBtn from "./MessageBtn";

import { MyContext } from "../../../Context/ContextMenu";





const MessageBox = () => {
  const { currentUserMessages } = useContext(MyContext);
  

  return (
    <div className="flex flex-col gap-3 px-4 py-4">
      
      {currentUserMessages && currentUserMessages.map((msg : any ) => (
        <MessageBtn key={msg._id} message={msg} />
      ))}
    </div>
  );
};

export default MessageBox;
