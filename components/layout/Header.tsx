import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold">🏠 Logo</div>
        </div>
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg text-black"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Sign In
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Rooms</a></li>
            <li><a href="#" className="hover:text-gray-400">Mansion</a></li>
            <li><a href="#" className="hover:text-gray-400">Countryside</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;