const getColor = (name : string) => {

// generate random color
  const colors = [
    "bg-indigo-500",
    "bg-green-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-blue-500",
  ];
  // return same color for the same alphabet 
  return colors[name.charCodeAt(0) % colors.length];
};

const DefaultAvatar = ({ name } : { name: string }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${getColor(
        name
      )}`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default DefaultAvatar;
