import Navbar from "../Components/General/Navbar"
import FriendSidebar from "../Components/Home/FriendSidebar/FriendSidebar"


const Home = () => {
  return (
    <div className=" h-screen overflow-hidden">
      <Navbar /> 
      <FriendSidebar />
    </div>
  )
}

export default Home