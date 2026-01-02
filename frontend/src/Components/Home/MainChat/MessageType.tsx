import { useContext, useState } from "react";
import { sendMessage } from "../../../functions/messages";
import { MyContext } from "../../../Context/ContextMenu";

const MessageType = () => {
  const {
    user,                // 👈 logged-in user
    currentUser,         // 👈 chat user
    setCurrentUserMessages,
  } = useContext(MyContext);

  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (!message.trim() || !user || !currentUser) return;

    const optimisticMessage = {
      _id: Date.now(),
      message,
      sender: user._id,          // ✅ logged-in user
      reciver: currentUser._id,  // ✅ chat user
      createdAt: new Date(),
    };

    // ✅ Optimistic UI update
    setCurrentUserMessages((prev: any[]) => [...prev, optimisticMessage]);

    // ✅ Send to backend (receiver id)
    await sendMessage(currentUser._id, message);

    setMessage("");
  };

  return (
    <div className="h-16 border-t px-4 flex items-center gap-3 bg-white fixed bottom-0 w-300">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        placeholder="Type a message"
        className="flex-1 h-10 px-4 rounded-full bg-gray-100 outline-none"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Send
      </button>
    </div>
  );
};

export default MessageType;
