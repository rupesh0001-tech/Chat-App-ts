

const Button = ({text, onClick } : { text: string, onClick: () => void }) => {
  return (
    <button onClick={onClick} className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full 
                     hover:bg-gray-100 transition-all duration-200 cursor-pointer">
      {text}
    </button>
  )
}

export default Button