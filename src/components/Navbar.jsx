import React from "react";
import tuf from '../assets/tuf.jpg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={tuf}
          alt="TUF Logo"
          className="h-10 w-10"
        />
        <span className="text-lg font-bold tracking-widest">TUF™️</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-8">
        <li className="hover:text-yellow-500 transition">Home</li>
        <li className="hover:text-yellow-500 transition">About</li>
        <li className="hover:text-yellow-500 transition">Community</li>
        <li className="hover:text-yellow-500 transition">Events</li>
      </ul>

      {/* Call-to-Action */}
      <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-400">
        Join Us
      </button>
    </nav>
  );
};


export default Navbar;