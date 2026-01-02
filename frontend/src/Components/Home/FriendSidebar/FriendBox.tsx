import { useContext } from "react";
import { MyContext } from "../../../Context/ContextMenu";
import DefaultAvatar from "./DefaultAvatar"


// bhai users ch type update krch ahe
const FriendBox = ({user} : {user: any}) => {
  const { setCurrentUser } = useContext(MyContext);
  return (
     <div onClick={() => {setCurrentUser(user)}} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
      
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