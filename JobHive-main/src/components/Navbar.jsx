import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Info, FileText, Bookmark, User, Hexagon } from "lucide-react"; // Hexagon represents a hive

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example toggle login state (replace with actual login logic)
  const handleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <nav className="bg-[#1b253a] text-white py-2 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <Hexagon className="w-8 h-8 text-[#00A3FF]" /> {/* Icon representing a hive */}
        <span className="text-[#00A3FF]">JobHive</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-[#00A3FF]">Home</Link>
        <Link to="/about" className="hover:text-[#00A3FF] flex items-center gap-1">
          <Info className="w-4 h-4" /> About
        </Link>
        <Link to="/browse-job" className="hover:text-[#00A3FF] flex items-center gap-1">
          <FileText className="w-4 h-4" /> Browse Jobs
        </Link>
        <Link to="/saved-jobs" className="hover:text-[#00A3FF] flex items-center gap-1">
          <Bookmark className="w-4 h-4" /> Saved Jobs
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search jobs..."
            className="p-2 rounded-full border border-gray-300 pl-8 focus:ring-2 focus:ring-[#00A3FF] text-black"
          />
          <Search className="absolute left-2 top-2 w-4 h-4 text-gray-500" />
        </div>

        {/* Login/Signup or Profile */}
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="bg-[#00A3FF] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#008CD1]"
          >
            Login/Signup
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <User className="w-5 h-5" />
              Profile
            </Link>
            <Link
              to="/addjob"
              className="bg-[#00A3FF] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#008CD1]"
            >
              Add Job
            </Link>
            <button
              onClick={handleLogin}
              className="text-gray-400 hover:text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
