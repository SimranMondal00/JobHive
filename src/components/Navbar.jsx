// src/components/NavBar.jsx
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-yellow-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">
          <Link to="/">JobHive</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-gray-700">
            About
          </Link>
          <Link
            to="/addjob"
            className="bg-black text-yellow-400 py-1 px-3 rounded hover:bg-gray-800"
          >
            Add Job
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
