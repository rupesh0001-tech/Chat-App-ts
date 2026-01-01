const Navbar = () => {
  return (
    <nav className="h-17.5 w-full px-6 md:px-16 lg:px-24 flex items-center justify-between bg-white border-b border-gray-200">
      
      {/* Brand */}
      <h1 className="text-md  md:text-xl font-bold text-black ">
        AAO BATE KARE
      </h1>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button
          className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full 
                     hover:bg-gray-100 transition-all duration-200 cursor-pointer  "
        >
          Login
        </button>

        <button
          className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full
                     hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer "
        >
          Register
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
