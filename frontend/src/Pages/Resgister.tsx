import { useContext, useState } from "react";
import { registerUser } from "../functions/AuthUser";
import { MyContext } from "../Context/ContextMenu";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setUser, setIsLogin } = useContext(MyContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    
    const data = await  registerUser({ user: formData });
    setUser(data);
    setIsLogin(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded-2xl focus:outline-none focus:ring-2 focu rounded-2xl-500 "
          required
        />

        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border px-3 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
