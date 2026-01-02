import { useContext, useEffect } from "react";
import FriendList from "./FriendList";
import { getFriends } from "../../../functions/Friends";
import { MyContext } from "../../../Context/ContextMenu";


const FriendSidebar = () => {

  const { setFriends, friends  } = useContext(MyContext);
  
  const getfriendsList = async () => { const temp  =  await getFriends();
    console.log(temp.users);
    setFriends(temp.users);
  }

  useEffect(() => {
    getfriendsList()
  }, []);

  return (
    <aside className=" w-80  h-screen  bg-white border-r border-gray-200 flex flex-col overflow-scroll pb-10">
      <h1 className=" text-md text-center font-semibold mt-3"> Friend List </h1>
      <hr className="my-4" />
      <div className="p-2 flex-1">
        <FriendList friends={friends} />
      </div>
    </aside>
  );
};

export default FriendSidebar;
