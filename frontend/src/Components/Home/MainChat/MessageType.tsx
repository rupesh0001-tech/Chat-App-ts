import { useContext, useState } from "react";
import { sendMessage } from "../../../functions/messages";
import { MyContext } from "../../../Context/ContextMenu";

const MessageType = () => {
  const { currentUser } = useContext(MyContext);


  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (!message.trim()) return; // prevent empty message
    const msg = await sendMessage(currentUser?._id, message);
    console.log(msg);
    setMessage("");
  };

  return (
    <div className="h-16 border-t px-4 flex items-center gap-3 bg-white fixed bottom-0 w-300">
      <input
        type="text"
        placeholder="Type a message"
        value={message}                      // ✅ bind state
        onChange={(e) => setMessage(e.target.value)} // ✅ update state
        className="flex-1 h-10 px-4 rounded-full bg-gray-100 outline-none"
        onKeyDown={(e) => e.key === "Enter" && handleClick()} // optional UX
      />

      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-full bg-blue-500 text-white cursor-pointer"
      >
        Send
      </button>
    </div>
  );
};

export default MessageType;
