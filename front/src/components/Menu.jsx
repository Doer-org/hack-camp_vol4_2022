import React, { useState } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import "../assets/humberger.css";

export default (props) => {
  // const [state, setstate] = useState(false);
  // const handleStateChange = () => {
  //     setstate(false)
  // }
  // const closeMenu = () => {
  //     setstate(false)
  // }
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
        className="menu-item text-2xl p-3"
        onClick={closeSideBar}
      >
        Home
      </Link>

      <Link
        to="/rank"
        className="menu-item text-2xl p-3"
        onClick={closeSideBar}
      >
        Ranking
      </Link>
    </Menu>
  );
};
