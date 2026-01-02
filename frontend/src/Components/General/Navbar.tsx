import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { MyContext } from "../../Context/ContextMenu";
import { useContext } from "react";
import { logoutUser } from "../../functions/AuthUser";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const { isLogin, user } = useContext(MyContext);
  return (
    <nav className="h-14 w-full px-6 md:px-16 lg:px-24 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Brand */}
      <h1 className="text-md  md:text-xl font-bold text-black ">
        AAO BATE KARE
      </h1>

      {/* Auth Buttons */}
      {isLogin ? (
        
        <div className=" flex gap-4 justify-center items-center  ">
          <h1 className=" text-md font-semibold "> {user?.name}</h1>
          <button onClick={ () => handleLogout() } className=" flex px-4 py-2 bg-red-500 text-md font-semibold cursor-pointer text-white rounded-2xl ">Logout</button>
        </div>
      
      ) : (
        <div className="flex items-center gap-3">
          <Button
            text="Login"
            onClick={() => {
              navigate("/login");
            }}
          />
          <Button
            text="Sign Up"
            onClick={() => {
              navigate("/register");
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
