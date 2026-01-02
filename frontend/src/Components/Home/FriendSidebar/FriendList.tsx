import type { FriendI } from "../../../interfaces/interfaces";
import FriendBox from "./FriendBox";

// bhai users ch type update krch ahe
const FriendList = ( {friends } : {friends: FriendI[]} ) => {
  
  return (
    <div className="flex flex-col gap-1 overflow-y-auto">
      {friends.map((user) => (
        <FriendBox key={user._id} user={user} />
      ))}
    </div>
  );
};

export default FriendList;
