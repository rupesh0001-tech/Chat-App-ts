const MessageType = () => {
  return (
    <div className="h-16 border-t px-4 flex items-center gap-3 bg-white fixed bottom-0  w-300">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 h-10 px-4 rounded-full bg-gray-100 outline-none"
      />
      <button className="px-4 py-2 rounded-full bg-blue-500 text-white cursor-pointer ">
        Send
      </button>
    </div>
  );
};

export default MessageType;
