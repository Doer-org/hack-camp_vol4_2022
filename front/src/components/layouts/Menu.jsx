import React, { useState } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import "../../assets/humberger.css";

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
        className="menu-items text-base sm:text-2xl py-3 hover:bg-orange-200"
        onClick={closeSideBar}
      >
        Home
      </Link>

      <Link
        to="/about"
        className="menu-items text-base sm:text-2xl py-3 hover:bg-orange-200"
        onClick={closeSideBar}
      >
        About
      </Link>
      <Link
        to="/ranking"
        className="menu-items text-base sm:text-2xl py-3 hover:bg-orange-200"
        onClick={closeSideBar}
      >
        Ranking
      </Link>
      <Link
        to="/snackList"
        className="menu-items text-base sm:text-2xl py-3 hover:bg-orange-200"
        onClick={closeSideBar}
      >
        Snacks
      </Link>
    </Menu>
  );
};
