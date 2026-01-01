import ChatNavbar from "./ChatNavbar";
import MessageBox from "./MessageBox";
import MessageType from "./MessageType";

const ChatBox = () => {
  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden w-full w-max-full ">
      <ChatNavbar />

      {/* Scrollable messages */}
      <div className="flex-1 overflow-y-auto pb-20 overscroll-contain">
        <MessageBox />
      </div>

      {/* Input */}
      <MessageType />
    </div>
  );
};

export default ChatBox;
