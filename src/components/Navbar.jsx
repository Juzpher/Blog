import React from "react";

const Navbar = () => {
  const menuItems = ["Home", "Best of", "About"];
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-row justify-start p-5 text-white bg-slate-800">
        {menuItems.map((menuItems) => {
          return (
            <ul>
              <li className="px-2">{menuItems}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
