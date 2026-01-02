import { useContext } from "react";
import { MyContext } from "../../../Context/ContextMenu";

const MessageBtn = ({ message }: any) => {
  const { user } = useContext(MyContext);
  console.log(message)
  return (
    <div
      className={`max-w-[75%] px-6 py-3 font-semibold rounded-xl text-md ${
        message.sender === user?._id
          ? "self-end bg-blue-500 text-white"
          : "self-start bg-gray-100 text-black"
      }`}
    >
      {message.message}
    </div>
  );
};

export default MessageBtn;
