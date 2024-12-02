import React from "react";

const Navbar = () => {
  const menuItems = ["Home", "Best of", "About"];

  return (
    <nav className="bg-white text-black shadow-">
      {/* Logo Section */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo URL alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-bold">My Blog</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-gray-300">
              <a href={`#${item.toLowerCase()}`} className="text-sm uppercase">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
