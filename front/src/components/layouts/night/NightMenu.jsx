import React, { useState } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import "../../../assets/nighthumberger.css";

export default (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <Menu
      {...props}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <Link
        to="/"
        className="menu-item text-base sm:text-2xl py-3 hover:bg-red-100"
        onClick={closeSideBar}
      >
        Home
      </Link>

      <Link
        to="/about"
        className="menu-item text-base sm:text-2xl py-3 hover:bg-red-100"
        onClick={closeSideBar}
      >
        About
        </Link>
      
    </Menu>
  );
};
