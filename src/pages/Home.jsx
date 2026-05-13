import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const decoded = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left */}
          <div>
            <h1 className="text-2xl font-bold">
              Task Manager
            </h1>
            <p className="text-sm text-gray-600">Welcome back, {decoded?.username}</p>
          </div>

          {/* Middle */}
          <div className="w-full md:w-[400px]">

            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* Right */}
          <div>

            <button
              onClick={handleLogout}
              className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Logout
            </button>

          </div>

        </div>

      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">

        <div className="bg-white rounded-2xl shadow-md p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Welcome to Task Manager
          </h2>

          <p className="text-gray-600 text-lg">
            Start managing your daily tasks efficiently.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Home;