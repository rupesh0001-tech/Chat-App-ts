import { useContext } from "react";
import { MyContext } from "../../../Context/ContextMenu";
import DefaultAvatar from "./DefaultAvatar"
import { getMessages } from "../../../functions/messages";


// bhai users ch type update krch ahe
const FriendBox = ({user} : {user: any}) => {
  const { setCurrentUser, setCurrentUserMessages } = useContext(MyContext);

    const fetchMessage = async (id : any) => {
      
      console.log(id);
      let temp = await getMessages(id);
      setCurrentUserMessages(temp.chat);
    };
    
  return (
     <div onClick={async () => { await fetchMessage(user._id) }} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
      
      {/* Avatar */}
      {user.profileImage ? (
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <DefaultAvatar name={user.name} />
      )}

      {/* Username */}
      <span className="text-sm font-medium text-gray-800 truncate">
        {user.name}
      </span>
    </div>
  )
}

export default FriendBox