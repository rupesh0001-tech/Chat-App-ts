import Navbar from "../Components/General/Navbar";
import FriendSidebar from "../Components/Home/FriendSidebar/FriendSidebar";
import ChatBox from "../Components/Home/MainChat/ChatBox";

const Home = () => {
  return (
    <div className=" h-screen overflow-hidden">
      <Navbar />
      <div className=" flex w-full justify-center shadow-md  ">  
          <FriendSidebar />
          <ChatBox />
      </div>
    </div>
  );
};

export default Home;
