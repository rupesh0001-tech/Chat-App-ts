import MessageBtn from "./MessageBtn";

const messages = [
  { id: 1, text: "Hi", isMe: false },
  { id: 2, text: "Hello 👋", isMe: true },
  { id: 3, text: "How are you?", isMe: false },
];

const MessageBox = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-4">
      {messages.map((msg) => (
        <MessageBtn key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default MessageBox;
