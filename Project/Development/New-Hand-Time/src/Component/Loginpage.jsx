import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    alert("Login Successful!");
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleenter = ()=>{
    navigate("/Home")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="mt-6">
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-purple-500"
            />
            {/* Toggle Password Visibility */}
            <span
              className="absolute right-3 top-9 cursor-pointer text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button */}
          <button onClick={handleenter}
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded shadow-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
