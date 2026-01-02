import { useContext, useEffect } from "react";
import MessageBtn from "./MessageBtn";

import { MyContext } from "../../../Context/ContextMenu";
import { socket } from "../../../socket/socket";

const MessageBox = () => {
  const { currentUserMessages, setCurrentUserMessages } = useContext(MyContext);

  useEffect(() => {
    const handler = (data: any) => {
      console.log(data);
      setCurrentUserMessages((prev: any) => [...prev, data]);
    };

    socket.on("receive-message", handler);

    return () => {
      socket.off("receive-message", handler);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 px-4 py-4  pb-20">
      {currentUserMessages &&
        currentUserMessages.map((msg: any) => (
          <MessageBtn key={msg._id} message={msg} />
        ))}
    </div>
  );
};

export default MessageBox;
