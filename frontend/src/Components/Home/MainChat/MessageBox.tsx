import { useEffect } from "react";
import MessageBtn from "./MessageBtn";
import { getMessages } from "../../../functions/messages";

const messages = [
  { id: 1, text: "Hi", isMe: false },
  { id: 2, text: "Hello 👋", isMe: true },
  { id: 3, text: "How are you?", isMe: false },
];

const MessageBox = ({id} : any ) => {
  console.log(id);
  if (id) {
    const fetchMessage = async () => {
      const temp = await getMessages(id);
      console.log(temp);
    };

    useEffect(() => {
      fetchMessage();
    });
  }

  return (
    <div className="flex flex-col gap-3 px-4 py-4">
      {messages.map((msg) => (
        <MessageBtn key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default MessageBox;
