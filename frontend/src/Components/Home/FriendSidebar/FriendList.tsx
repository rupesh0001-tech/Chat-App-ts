import FriendBox from "./FriendBox";

// bhai users ch type update krch ahe 
const FriendList = ({users} : {users: any}) => {
  
     return (
    <div className="flex flex-col gap-1 overflow-y-auto">
      {users.map((user : any) => (
        <FriendBox key={user.id} user={user} />
      ))}
    </div>
  );
  
}

export default FriendList