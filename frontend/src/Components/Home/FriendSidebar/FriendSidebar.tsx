import FriendList from "./FriendList";

const FriendSidebar = () => {
  const users = [
    { id: 1, name: "1Monish" },
    { id: 2, name: "! Roy..!!", role: "DEV" },
    { id: 3, name: "Ayush" },
    { id: 4, name: "Ak noor" },
    { id: 5, name: "Sneha Shetty" },
    { id: 6, name: "pratapAlok" },
    { id: 7, name: "RAREST_BOY" },
    { id: 8, name: "Aditi.." },
    { id: 9, name: "Deepak" },
    { id: 10, name: "Aditya" },
    { id: 11, name: "Aayush" },
    { id: 12, name: "Aayush" },
    { id: 13, name: "Aayush" },
    { id: 14, name: "Aayush" },
    { id: 15, name: "Aayush" },
    { id: 16, name: "Aayush" },
  ];

  return (
    <aside className=" w-80  h-screen  bg-white border-r border-gray-200 flex flex-col overflow-scroll pb-10">
      <h1 className=" text-md text-center font-semibold mt-3"> Friend List </h1>
      <hr className="my-4" />
      <div className="p-2 flex-1">
        <FriendList users={users} />
      </div>
    </aside>
  );
};

export default FriendSidebar;
