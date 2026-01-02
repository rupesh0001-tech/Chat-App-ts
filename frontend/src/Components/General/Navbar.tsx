import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { MyContext } from "../../Context/ContextMenu";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLogin, user } = useContext(MyContext);
  console.log(user);
  console.log(isLogin);
  return (
    <nav className="h-14 w-full px-6 md:px-16 lg:px-24 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Brand */}
      <h1 className="text-md  md:text-xl font-bold text-black ">
        AAO BATE KARE
      </h1>

      {/* Auth Buttons */}
      {isLogin ? (
        
        <h1> {user.name}</h1>
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
