import React from "react";
import { Link } from "react-router-dom";
import image from "../../data/images/logo.png";
import Menu from "./Menu";

export const Navbar = () => {
  return (
    <div className=" py-0 m-0 lg:h-20 h-16 text-center align-middle sm:text-left">
      <img
        className="lg:h-14 h-12 p-0 mx-2 mr-4 my-3 inline-block"
        src={image}
        alt="お菓子おみくじロゴ"
      />

      <Link
        to="/snackList"
        className="text-white lg:inline hidden text-2xl px-4 py-6 mx-0 float-right hover:text-orange-200"
      >
        Snacks
      </Link>

      <Link
        to="/ranking"
        className="text-white lg:inline hidden text-2xl px-4 py-6 mx-0 float-right hover:text-orange-200"
      >
        Ranking
      </Link>

      <Link
        to="/about"
        className="text-white lg:inline hidden text-2xl px-4 py-6 mx-0 float-right hover:text-orange-200"
      >
        About
      </Link>

      <Link
        to="/"
        className="text-white lg:inline hidden text-2xl px-4 py-6 mx-0 float-right hover:text-orange-200"
      >
        Home
      </Link>

      <Menu
        width={`50%`}
        pageWrapId={"page-wrap"}
        right
        onClose={"handleOnClose"}
        isOpen={false}
      />
      <main id="page-wrap"></main>
    </div>
  );
};
